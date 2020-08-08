import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "../TasksFilter";


export default function Footer ({toDo, done, filter,  onFilterChange, clearCompleted}) {
    return (
        <footer className="footer">
            <span className="todo-count">{toDo} more to do, {done} done</span>
            <TasksFilter
                filter={filter}
                onFilterChange={ onFilterChange}
            />
            <button
                type="button"
                onClick={clearCompleted}
                className="clear-completed">Clear completed</button>
        </footer>
    )
}

Footer.defaultProps = {
    toDo: 1,
    done: 1,
    filter: 'all',
    onFilterChange: () => {},
    clearCompleted: () => {}
};

Footer.propTypes = {
    toDo: PropTypes.number,
    done: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    clearCompleted: PropTypes.func
};