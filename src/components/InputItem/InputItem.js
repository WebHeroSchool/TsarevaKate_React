import React from 'react';
// import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    if (this.state.inputValue !== '') {
      this.setState({ error: false });
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({ error: true });
    }
  };

  onInputChange = e => {
    this.setState({ inputValue: e.target.value.toUpperCase() })
  };

  render() {
    const { onClickAdd } = this.props;

    return (<div className={styles.wrap} >
      <input
        className={
          classnames({
            [styles.input]: true,
            [styles.error]: this.state.error,
          })
        }
        type="text"
        value={this.state.inputValue}
        placeholder="Введите задачу"
        onChange={this.onInputChange}
      />
      <small
        className={
          classnames({
            [styles.errorText]: true,
            [styles.errorActive]: this.state.error,
          })
        }
      >
        Поле не может быть пустым
      </small>
      <button className={styles.btn} type="submit" onClick={this.onButtonClick}>
        Добавить
        </button>

    </div>);
  };
};

export default InputItem;