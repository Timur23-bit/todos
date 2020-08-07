import React from "react";
import TaskList from "../TaskList";


function Main ({data, onDeleted, onToggleDone, onToggleEdit, editItem}) {
    return (
        <section className="main">
            <TaskList
                todos={data}
                onDeleted={onDeleted}
                onToggleDone={onToggleDone}
                onToggleEdit={onToggleEdit}
                editItem={editItem}
            />
        </section>
    )
}

export default Main;