import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function TodoApp () {
    const todoData = [
        {label: 'Completed task', className: 'completed', id: 'cm'},
        {label: 'Editing task', className: 'editing', id: 'ed'},
        {label: 'Active task', id: 'ac'}
    ];

    return (
        <section className="todoapp">
            <NewTaskForm/>
            <Main data={todoData}/>
            <Footer/>
        </section>
    )
}

export default TodoApp;