import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
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
    count: 6,
  };

  onClickDone = id => {
    const newItemlist = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    this.setState({items: newItemlist});
  };

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>
        Список дел
      </h1>
      <div className={styles.content}>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
        <Footer count={this.state.count}/>
      </div>
    </div>);
  }
};

export default App;