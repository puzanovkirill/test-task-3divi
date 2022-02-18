import React from 'react';
import { useDispatch } from 'react-redux';
import { setType } from '../../store/typeSlice';
import style from './TypeSelect.module.css';

const TypeSelect = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setType(e.target.value));
  };
  return (
    <select onChange={handleChange} className={style.select}>
      <option value="v*vd">Amount * duration</option>
      <option value="v">Amount of views</option>
      <option value="vd">Duration of views</option>
    </select>
  );
};

export default TypeSelect;
