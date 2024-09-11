import React, { FC, useRef, useState } from 'react';

import { addPost, getPosts } from '../../redux/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../../hook/rtkHook';

interface ModalProps {
  modalTrigger: boolean;
  setModalTrigger: (value: boolean) => void; 
}

const Modal: FC<ModalProps> = ({ modalTrigger, setModalTrigger }) => {
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const MAX_SYMBOL_DESC = 10;

  const [symbolDesc, setSymbolDesc] = useState(MAX_SYMBOL_DESC);

  const handlerValidDesc = () => {
    setSymbolDesc(MAX_SYMBOL_DESC - descRef.current.value.length);
  };

  const handlerGeneratePost = () => {
    if (symbolDesc >= 0) {
      const post = {
        title: titleRef.current.value,
        desc: descRef.current.value,
        status: false,
        author: username,
      };
      dispatch(addPost(post));

      setModalTrigger(false);
    }
  };
  return (
    <div
      className={`modal__overlay ${modalTrigger ? 'modal_active' : ''}`}
      onClick={() => setModalTrigger(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="mt-4 p-4">
          <input
            className="modal_input"
            type="text"
            ref={titleRef}
            placeholder="Введите заголовок"
          />

          <input
            className="modal_input"
            type="text"
            ref={descRef}
            placeholder="Описание"
            onChange={() => handlerValidDesc()}
          />
          {symbolDesc > 0 ? (
            <p className="ml-2 text-[10px] text-green-600">
              Вы можете ввести ещё {symbolDesc} символов
            </p>
          ) : symbolDesc == 0 ? (
            <p className="ml-2 text-[10px] text-green-600">Вы достигли лимита символов</p>
          ) : (
            <p className="ml-2 text-[10px] text-red-500">
              Слишком много символов. Удалите минимум {symbolDesc}
            </p>
          )}

          <div className="text-right mr-4 mt-6 ">
            <button
              className="btn hover:bg-slate-400"
              type="submit"
              onClick={() => handlerGeneratePost()}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
