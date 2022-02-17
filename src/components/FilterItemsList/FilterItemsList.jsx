import React from 'react';
import style from './FilterItemsList.module.css';
import FilterItem from '../FilterItem/FilterItem';
import { useSelector } from 'react-redux';

const FilterItemsList = () => {
  const devices = useSelector((state) => state.devices);
  return (
    <div className={style.filterList}>
      {devices.map((device) => {
        return <FilterItem device={device} />;
      })}
    </div>
  );
};

export default FilterItemsList;
