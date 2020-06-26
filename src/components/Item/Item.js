import React from 'react';
import classnames from 'classnames';
import del from './delete.svg';
import styles from './Item.module.css';

const Item = ({value, isDone, id, onClickDone, onClickDelete}) => (
  <div className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    <label>
      <input type="checkbox" name="itemList" onClick={() => onClickDone(id)}/>
      <span className={styles.check}></span>
      {value}
    </label>
    <div className={styles.delete} onClick={()=> onClickDelete(id)}>
      <img src={del} alt="удалить"/>
    </div>
  </div>
);

export default Item;