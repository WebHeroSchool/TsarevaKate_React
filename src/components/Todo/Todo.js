import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';


const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Написать приложение',
        isDone: false,
        id: 1,
      },
      {
        value: 'завершить урок по props',
        isDone: true,
        id: 2,
      },
      {
        value: 'сходить в магазин',
        isDone: true,
        id: 3,
      }
    ],
    count: 3,
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(()=> {
    console.log('componentDidMount');
  }, [count]);

  useEffect(()=> {
    console.log('componentDidUpdate');
  });

  const onClickDone = id => {
    const newItemlist = items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemlist);
  };

  const onClickDelete = id => {
    setItems(items.filter(item => item.id !== id));
    setCount(count => count - 1);
  };

  const onClickAdd = value => {
    setItems([
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ]);
    setCount(count => count + 1);
  };

  return (<div>    
      <h1>
        Список дел
      </h1>  
      <InputItem onClickAdd={onClickAdd} />
      <ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} />
      <Footer count={count} />
    </div>);
};

export default Todo;