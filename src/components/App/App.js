import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';


const App = () => {
  const items = [
    {
      value: 'Написать приложение'
    },
    {
      value: 'завершить урок по props'
    },
    {
      value: 'сходить в магазин'
    }
  ];

  return (<div>
    <h1>
      Список дел
  </h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
}

export default App;