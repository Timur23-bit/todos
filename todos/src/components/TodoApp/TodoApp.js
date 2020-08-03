import React, {Component} from "react";
import NewTaskForm from "../NewTaskForm";
import Main from "../Main";
import Footer from "../Footer";


export default class TodoApp extends Component {
    constructor() {
        super();

        this.state = {
            todoData: [
                {label: 'Completed task', className: 'completed', id: 'cm'},
                {label: 'Editing task', className: 'editing', id: 'ed'},
                {label: 'Active task', id: 'ac'}
            ]
        };

        this.deleteTask = (id) => {
            this.setState(({todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);

                const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

                return {
                    todoData: newArray
                }
            })
        }
    }



    render () {
        return (
            <section className="todoapp">
                <NewTaskForm/>
                <Main data={this.state.todoData} onDeleted={this.deleteTask}/>
                <Footer/>
            </section>
        )
    }
}

