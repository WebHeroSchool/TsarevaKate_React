import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Написать приложение',
      isDone: false,
    },
    {
      value: 'завершить урок по props',
      isDone: true,
    },
    {
      value: 'сходить в магазин',
      isDone: true,
    },
  ];

  return (<div className={styles.wrap}>
    <h1 class={styles.title}>
      Список дел
    </h1>
    <InputItem />
    <Button variant="contained" color="secondary">
      добавить
    </Button>
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
};

export default App;