import React, {Component} from "react";
import NewTaskForm from "../NewTaskForm";
import Main from "../Main";
import Footer from "../Footer";


export default class TodoApp extends Component {

  state = {
    todoData: [
      this.createTodoTask('Completed task'),
      this.createTodoTask('Editing task'),
      this.createTodoTask('Active task'),
    ],
    filter: 'all' // active, all, done
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  // eslint-disable-next-line react/sort-comp
  createTodoTask (label) {
    return {
      label,
      edit: false,
      done: false,
      id: Math.floor(Math.random()*10000)
    }
  };

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return  items.filter((item) => !item.done);
      case 'completed':
        return  items.filter((item) => item.done);
      default:
        return items;
    }
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      edit: false,
      done: false,
      id: Math.floor(Math.random()*10000)
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    })
  };

  editItem = (id, propName, label) => {
    const {todoData} = this.state;
    const idx = todoData.findIndex((el) => el.id === id);

    const oldItem = todoData[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    const newIt = {...newItem, label};
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData.slice(0, idx),
        newIt,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      }
    });
  };

  deleteTask = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })
  };



  clearCompleted = () => {
    const {todoData} = this.state;
    const newArr = todoData.filter((el) => !el.done);

    this.setState(() => {
        return {
          todoData: newArr
        };
      }
    )
  };

  onFilterChange = (filter) => {
    this.setState({
      filter
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  onToggleEdit = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit')
      }
    });
  };



  render () {
    const { todoData, filter } = this.state;

    const visibleItems = this.filter(todoData, filter);

    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <section className="todoapp">
        <NewTaskForm
          addItem={this.addItem}
        />
        <Main
          data={visibleItems}
          onDeleted={this.deleteTask}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit}
          editItem={this.editItem}
        />
        <Footer
          toDo={todoCount}
          done={doneCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          clearCompleted={this.clearCompleted}
        />
      </section>
    )
  }
}
