import React from 'react';
import style from './FilterItemsList.module.css';
import FilterItem from '../FilterItem/FilterItem';

const FilterItemsList = ({ devices }) => {
  return (
    <div className={style.filterList}>
      {devices.map((device) => {
        return <FilterItem key={device.n} device={device} />;
      })}
    </div>
  );
};

export default FilterItemsList;
