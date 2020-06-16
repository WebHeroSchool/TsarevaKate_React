import React from 'react';
import styles from './ItemFilter.module.css';

const ItemFilter = ({value, isCheck}) => {  
  return (
    <label сlassName={styles.label}>
      <input className={styles.input} type="radio" name="filter" value={value}/>
      <span className={styles.text}>
        {value}
      </span>
    </label>
  );
};

export default ItemFilter;