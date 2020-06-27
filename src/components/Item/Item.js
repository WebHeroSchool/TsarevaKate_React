import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import del from './delete.svg';
import styles from './Item.module.css';


class Item extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
  };

  componentDidUpdate() {
    console.log('componentDidUpdate');
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  };

  componentWillMount() {
    console.log('componentWillMount');
  };

  componentDidCatch() {
    console.log('componentDidCatch');
  };

  getDerivedStateFromError() {
    console.log('getDerivedStateFromError');
  };

  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;

    return (
      <div className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone,
        })
      }>
        <label>
          <input
            type="checkbox"
            name="itemList"
            onClick={() => onClickDone(id)}
          />
          <span className={styles.check}></span>
          {value}
        </label>
        <div className={styles.delete} onClick={() => onClickDelete(id)}>
          <img src={del} alt="удалить" />
        </div>
      </div>
    );
  }
}

Item.defaultProps = {
  isDone: false,
};

Item.protoTypes = {
  isDone: PropTypes.bool.isRequired,
}

export default Item;