import React, {Component} from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  state= {
    label: '',
    min: '',
    sec: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onMinChange = (event) => {
    this.setState({
      min: event.target.value
    });
  };

  onSecChange = (event) => {
    this.setState({
      sec: event.target.value
    });
  };

  onSubmit = () => {
    try {
      const { addItem } = this.props;
      const { label, min, sec } = this.state;
      if (isNaN(Number(min))) {
        throw new Error('Type error, not a number')
      }
      if (sec > 59 || isNaN(Number(min))) {
        throw new Error('Type error, not a number or > 59')
      }
      if (label.length !== 0) {
        addItem(label, min, sec);
        this.setState({
          label: '',
          min: '',
          sec: ''
        })
      }
    } catch (error) {
      if (error.message === 'Type error, not a number') {
        alert(error.message);
        this.setState({
          min: '',
          sec: ''
        })
      }
      if (error.message === 'Type error, not a number or > 59') {
        alert(error.message);
        this.setState({
          sec: ''
        })
      }
    }
  };

  render () {
    const {label, min, sec} = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onKeyPress={(event) => {
          if (event.charCode === 13) {
            this.onSubmit()
          }
        }
        }>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}

          />
          <input
            className="new-todo-form__timer-min"
            placeholder="Min"
            onChange={this.onMinChange}
            value={min}
            autoFocus
          />
          <input
            className="new-todo-form__timer-sec"
            placeholder="Sec"
            onChange={this.onSecChange}
            value={sec}
            autoFocus
          />
        </form>
      </header>
    )
  }
}

NewTaskForm.defaultProps = {
  addItem: () => {}
};

NewTaskForm.propTypes = {
  addItem: PropTypes.func
};
