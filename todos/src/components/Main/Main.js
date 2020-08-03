import React from "react";
import TaskList from "../TaskList";


function Main ({data, onDeleted}) {
    return (
        <section className="main">
            <TaskList todos={data} onDeleted={onDeleted}/>
        </section>
    )
}

export default Main;