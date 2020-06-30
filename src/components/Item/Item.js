import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import del from './delete.svg';
import styles from './Item.module.css';

class Item extends React.Component {

  componentDidMount() {
    this.timerID = setInterval(() => console.log('interval'), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
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