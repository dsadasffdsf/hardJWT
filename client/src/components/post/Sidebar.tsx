import React, { FC, useState } from 'react';
import Modal from './Modal';
import { useAppSelector } from '../../hook';

const Sidebar: FC = () => {
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
  return (
    <>
      <aside className="top-[5%] left-[5%] p-4 fixed shadow-2xl">
        <div className="flex justify-center mb-4 space-x-6">
          <h4>active : {active} </h4>
          <h4>inactive : {inactive}</h4>
        </div>
        <button className="btn hover:bg-[#8f989c6e]" type="submit" onClick={() => modalHandler()}>
          Добавить запись
        </button>
      </aside>
      <Modal modalTrigger={modalTrigger} setModalTrigger={setModalTrigger} />
    </>
  );
};

export default Sidebar;
