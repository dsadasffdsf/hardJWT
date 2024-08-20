import React, { FC, useState } from 'react';
import Modal from './Modal';
import { useAppDispatch, useAppSelector } from '../../hook/rtkHook';
import { addPost } from '../../redux/slices/postsSlice';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const [modalTrigger, setModalTrigger] = useState(false);
  const { active, inactive } = useAppSelector((state) => state.posts);

  const { isAuth } = useAppSelector((state) => state.user);

  const modalHandler = () => {
    if (isAuth) {
      //user
      setModalTrigger(true);
    } else {
      alert('Сперва войдите в аккаунт');
    }
  };

  const generatePost = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1)) + 10

    const post = {
      title: `Hello ${randomNumber}`,
      desc: `Hello  ${randomNumber}`,
      status: false,
      author: 'admin',
    };
    dispatch(addPost(post));
  };
  return (
    <>
      <aside className="top-[15px] left-0 p-4 sticky shadow-2xl w-full">
        <div className="flex justify-center mb-4 space-x-6">
          <h4>active : {active} </h4>
          <h4>inactive : {inactive}</h4>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="btn hover:bg-[#8f989c6e] " type="submit" onClick={() => modalHandler()}>
            Добавить запись
          </button>
          <button className="btn hover:bg-[#8f989c6e]" type="submit" onClick={() => generatePost()}>
            Сгенерировать пост
          </button>
        </div>
      </aside>
      <Modal modalTrigger={modalTrigger} setModalTrigger={setModalTrigger} />
    </>
  );
};

export default Sidebar;
