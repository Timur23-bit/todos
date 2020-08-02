import React from "react";
import TaskList from "../TaskList/TaskList";


function Main ({data}) {
    return (
        <section className="main">
            <TaskList todos={data} />
        </section>
    )
}

export default Main;