import React, { FC } from 'react';

import { remPost, updatePost } from '../../redux/slices/postsSlice';
import { useAppDispatch } from '../../hook/rtkHook';
import { Post } from '../../modules/IPost';

const DetalPost: FC<{ post: Post }> = ({ post }) => {
  const { title, desc, status, author, _id } = post;
  const dispatch = useAppDispatch();
  const handleStatusUpdate = () => {
    dispatch(updatePost(_id));
  };
  const delPostHandler = () => {
    dispatch(remPost(_id));
  };
  return (
    <li className="shadow-2xl p-4 bg-white hover:bg-slate-300 relative w-full post-animation">
      <h1
        className="text-5xl font-bold cursor-pointer text-gray-900 inline-block"
        onClick={() => handleStatusUpdate()}>
        {title}
      </h1>
      <p className="text-xl mt-2">{desc}</p>
      <h4>
        Статус :
        {status ? (
          <span className="text-green-500">Выполнено</span>
        ) : (
          <span className="text-red-600">Невыполнено</span>
        )}
      </h4>
      <h4>Автор : {author}</h4>
      <button
        className="absolute top-[10px] right-[20px] text-red-600 text-4xl"
        type="submit"
        onClick={() => delPostHandler()}>
        x
      </button>
    </li>
  );
};

export default DetalPost;
