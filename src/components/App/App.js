import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => {
  return (<Router>
    <div className={styles.wrap}>
      <div className={styles.sidebar}>
        <Link to='/'>
          <div className={styles.tab}>
            Обо мне
          </div>
        </Link>
        <Link to='/todo'>
          <div className={styles.tab}>
            Дела
          </div>
        </Link>
        <Link to='/contacts'>
          <div className={styles.tab}>
            Контакты
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>);
};

export default App;