import React, { useEffect, useState } from 'react';
import style from './FilterItem.module.css';
import { useDispatch } from 'react-redux';
import {
  addFilteredItem,
  removeFilteredItem,
} from '../../store/filteredDataSlice';

const FilterItem = ({ device }) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isActive) {
      dispatch(removeFilteredItem(device));
    } else {
      dispatch(addFilteredItem(device));
    }
    setIsActive(!isActive);
  };

  return (
    <div className={style.filterItem} onClick={handleClick}>
      <div
        className={`${style.filterItem__name} ${isActive ? style.active : ''}}`}
      >
        {device.n}
      </div>
      <div className={isActive ? style.active : style.inactive}></div>
    </div>
  );
};

export default FilterItem;
