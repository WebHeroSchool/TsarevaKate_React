import React from 'react';
import ItemFilter from '../ItemFilter/ItemFilter';
import styles from './Filter.module.css';

const Filter = ({filter}) => (
  <form action="#" className={styles.wrap}>
    {filter.map(filter => 
      <ItemFilter key={filter.value} сlassName={styles.label} value={filter.value} isCheck={filter.isCheck}/>
    )}
  </form>
);

export default Filter;