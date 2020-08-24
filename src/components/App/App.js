import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => {
  return (<Router>
    <div className={styles.wrap}>
      <div className={styles.sidebar}>
        <NavLink to='/' exact 
          activeClassName={styles.active} 
          className={styles.tab}>
            Обо мне
        </NavLink>
        <NavLink to='/todo' 
          activeClassName={styles.active} 
          className={styles.tab}>
            Дела
        </NavLink>
        <NavLink to='/contacts' 
          activeClassName={styles.active} 
          className={styles.tab}>
            Контакты
        </NavLink>
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