import React from 'react';
// import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';


const InputItem = () => (<div className={styles.wrap}>
  <input className={styles.input} type="text" placeholder="Введите задачу"/>
  <button className={styles.btn} type="submit">Добавить</button>
</div>);

export default InputItem;