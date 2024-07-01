import React, { FC, useState } from 'react';
import DetalPost from './DetalPost';

import FilterBarPosts from './FilterBarPosts';
import { useAppSelector } from '../../hook';
import { Post } from '../../modules/IPost';

const PostsList: FC = () => {
  const { postsList } = useAppSelector((state) => state.posts);
  const [filterValue, setFilterValue] = useState('all');

  const handlePostList = (posts: Post[], key: string) => {
    let filteredPosts = [];
    if (posts) {
      if (key === 'accept') {
        filteredPosts = posts.filter((item) => item.status === true);
      } else if (key === 'false') {
        filteredPosts = posts.filter((item) => item.status === false);
      } else if (key === 'all') {
        filteredPosts = posts;
      }
    }
    if (filteredPosts.length === 0) {
      return (
        <div className="text-center w-full ">
          <h2 className="font-bold text-6xl">Постов пока нет</h2>
        </div>
      );
    }

    return filteredPosts.map((item) => <DetalPost key={item._id} post={item} />);
  };

  return (
    <section className="w-[1000px]">
      <FilterBarPosts setFilterValue={setFilterValue} />
      <ul className="space-y-4 w-full">
        {filterValue === 'all'
          ? handlePostList(postsList, 'all')
          : filterValue === 'accept'
          ? handlePostList(postsList, 'accept')
          : handlePostList(postsList, 'false')}
      </ul>
    </section>
  );
};

export default PostsList;
