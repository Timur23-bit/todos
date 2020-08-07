import React from "react";
import TasksFilter from "../TasksFilter";


function Footer ({toDo, done, filter,  onFilterChange, clearCompleted}) {
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

export default Footer;