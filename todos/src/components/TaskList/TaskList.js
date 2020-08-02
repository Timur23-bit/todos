import React from "react";
import Task from "../Task/Task";


function TaskList({todos}) {

    const elements = todos.map((item) => {
        return <Task item = {item} key={item.id}/>;
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList;