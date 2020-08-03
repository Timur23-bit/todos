import React from "react";
import Task from "../Task";


function TaskList ({ todos, onDeleted }) {
    const elements = todos.map((item) => {
        const { id } = item;
        return <Task item = {item} key={item.id} onDeleted = {() => onDeleted(id)}/>;
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList;