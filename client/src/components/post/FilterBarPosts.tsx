import React, { FC, useState } from 'react';

interface FilterBarPostsProps {
  setFilterValue: (value: string) => void;
}

const FilterBarPosts: FC<FilterBarPostsProps> = ({ setFilterValue }) => {
  const [activeBtnFilter, setActiveBtnFilter] = useState('all');

  const createFilterElem = (title: string, styleTriggerFilter: string) => {
    return (
      <li 
        className="filter__elem"
        onClick={() => {
          setFilterValue(styleTriggerFilter);
          setActiveBtnFilter(styleTriggerFilter);
        }}>
        <h1
          className={`text-4xl max-xl:text-2xl p-4 max-sm:p-2 max-sm:text-sm ${
            activeBtnFilter === styleTriggerFilter ? 'filter_active' : ''
          }`}>
          {title}
        </h1>
      </li>
    );
  };
  return (
    <ul className="bg-white border-[1px] border-black rounded-[25px] flex text-center overflow-hidden mb-4 ">
      {createFilterElem('Все', 'all')}
      {createFilterElem('Выполненные', 'accept')}
      {createFilterElem('Невыполненные', 'fail')}
    </ul>
  );
};

export default FilterBarPosts;
