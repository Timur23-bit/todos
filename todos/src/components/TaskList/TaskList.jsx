import React from "react";
import PropTypes from "prop-types";
import Task from "../Task";


export default function TaskList ({ todos, onDeleted, onToggleDone, onToggleEdit,editItem, timer}) {
  const elements = todos.map((item) => {
    const { id } = item;
    return <Task
      data={todos}
      item={item}
      key={item.id}
      onDeleted = {() => onDeleted(id)}
      onToggleDone={() => onToggleDone(id)}
      onToggleEdit={() => onToggleEdit(id)}
      editItem={editItem}
      timer={timer}
    />;
  });

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  )
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleEdit: () => {},
  editItem: () => {}
};
TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
  editItem: PropTypes.func
};