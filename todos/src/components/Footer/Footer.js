import React from "react";
import TasksFilter from "../TasksFilter";
import PropTypes from "prop-types";


export default function Footer ({toDo, done, filter,  onFilterChange, clearCompleted}) {
    return (
        <footer className="footer">
            <span className="todo-count">{toDo} more to do, {done} done</span>
            <TasksFilter
                filter={filter}
                onFilterChange={ onFilterChange}
            />
            <button
                onClick={clearCompleted}
                className="clear-completed">Clear completed</button>
        </footer>
    )
}

Footer.defaultProps = {
    toDo: 0,
    done: 0,
    filter: 'all',
    onFilterChange: () => {},
    clearCompleted: () => {}
};

Footer.propTypes = {
    toDo: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func,
    clearCompleted: PropTypes.func
};