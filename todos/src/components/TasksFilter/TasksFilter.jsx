import React from "react";
import PropTypes from "prop-types";

export default class TasksFilter extends React.Component{

  buttons = [
    { name: 'all', label: 'all'},
    { name: 'active', label: 'active'},
    { name: 'completed', label: 'completed'}
  ];

  render() {
    const{filter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button
            type="button"
            className={clazz}
            onClick={() =>  onFilterChange(name)}>
            {label}
          </button>
        </li>
      )
    });
    return (
      <ul className="filters">
        {buttons}
      </ul>
    )
  }
}

TasksFilter.defaultProps = {
  onFilterChange: () => {}
};

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func
};