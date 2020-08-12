import React, {Component} from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  state= {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {addItem} = this.props;
    const {label} = this.state;
    if (label.length !== 0) {
      addItem(label);
      this.setState({
        label: ''
      })
    }
  };

  render () {
    const {label} = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
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
