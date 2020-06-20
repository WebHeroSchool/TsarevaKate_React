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
      },
      {
        value: 'завершить урок по props',
        isDone: true,
      },
      {
        value: 'сходить в магазин',
        isDone: true,
      },
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>
        Список дел
      </h1>
      <div className={styles.content}>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
        <Footer count={3} />
      </div>
    </div>);
  }
};

export default App;