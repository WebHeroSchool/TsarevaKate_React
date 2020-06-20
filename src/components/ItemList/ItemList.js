import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone}) => (
  <div className={styles.wrap}>
    {items.map(item =>
      <Item key={item.value} value={item.value} isDone={item.isDone} onClickDone={onClickDone}/>
    )}
  </div>
);

export default ItemList;