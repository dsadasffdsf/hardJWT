import React, { FC, useEffect } from 'react';
import Sidebar from '../components/post/Sidebar';
import PostsList from '../components/post/PostsList';
import Alert from '../components/Alert';

import { getPosts } from '../redux/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../hook/rtkHook';
import { fetchCheckAuth } from '../redux/slices/usersSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { username } = useAppSelector((state) => state.user);
  const { alertList } = useAppSelector((state) => state.alert);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(fetchCheckAuth());
  }, []);

  return (
    <main className="container m-auto ">
      <div className="flex mt-12 lg:space-x-4 max-lg:flex-col max-lg:px-4 max-md:mt-4">
        <div className=" relative max-lg:mb-[24px]">
          <Sidebar />
        </div>
        <PostsList />
      </div>
      <div className="absolute top-0 left-1/2 right-1/2 grid grid-rows-1 space-y-10">
        {alertList.map((alert, index) =>
          alert.visible ? (
            <div className="relative">
              <Alert key={index} message={alert.message} alertType={alert.alertType} />
            </div>
          ) : (
            ' '
          ),
        )}
      </div>
    </main>
  );
};

export default Home;
