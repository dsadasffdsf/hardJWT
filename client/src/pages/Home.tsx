import React, { FC, useEffect } from 'react';
import Sidebar from '../components/post/Sidebar';
import PostsList from '../components/post/PostsList';

import { getPosts } from '../redux/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchCheckAuth } from '../redux/slices/usersSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { username } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(fetchCheckAuth());
  }, []);

  return (
    <main className="container m-auto">
      <div className="flex mt-12">
        <div className="w-[300px]">
          <Sidebar />
        </div>
        <PostsList />
        <div className="ml-6">
          <h3>{username ? username : `Пользователь не авторизован`}</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
