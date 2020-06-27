import React from 'react';
import Filter from '../Filter/Filter';
import styles from './Footer.module.css';

const
  filter = [
    {
      value: 'Все',
      isCheck: true,
    },
    {
      value: 'Активные',
      isCheck: false,
    },
    {
      value: 'Выполнено',
      isCheck: false,
    },
  ],
  btnClear = (<button className={styles.btn}>Удалить сделанные</button>),
  Footer = ({count}) => (<footer className={styles.wrap}>
    <div className={styles.count}>
      Осталось:
      <span>
        {count}
      </span>
    </div>
    <Filter filter={filter} />
    {btnClear}
  </footer>);

Footer.defaultProps = {
  count: 0,
};

export default Footer;