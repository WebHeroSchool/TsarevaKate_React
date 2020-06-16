import React from 'react';
import classnames from 'classnames';
import del from './delete.svg';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (
  <div className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    <label>
      <input type="checkbox" name="itemList" />
      <span className={styles.check}></span>
      {value}
    </label>
    <div className={styles.delete}>
      <img src={del} alt="удалить"/>
    </div>
  </div>
);

export default Item;