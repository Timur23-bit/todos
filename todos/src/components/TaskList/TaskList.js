import React from "react";
import Task from "../Task";


function TaskList ({ todos, onDeleted, onToggleDone, onToggleEdit,editItem}) {
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
        />;
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList;