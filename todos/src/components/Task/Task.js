import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class Task extends Component {
    state = {
        label: this.props.item.label
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editItem(this.props.data, this.props.item.id, 'edit', e);
    };

    render () {
        const { item, onDeleted, onToggleDone, onToggleEdit } = this.props;
        const {edit, done} = item;

        let editing = '';
        let classNames = '';

        if (done) {
            classNames += ' completed';
        }

        if (edit) {
            classNames += ' editing';
            editing = <input
                type="text"
                className="edit"
                onChange={this.onLabelChange}
                value={this.state.label}
            />;
        }

        return (
            <li className={classNames} style={item.style}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span
                            className="description"
                            onClick={onToggleDone}
                        >
                            {this.state.label}
                        </span>
                        <span
                            className="created">
                            {formatDistanceToNow(Date.now(), {addSuffix: true})}
                        </span>
                    </label>
                    <button
                        className="icon icon-edit"
                        onClick={onToggleEdit}
                    />
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    />
                </div>
                <form onSubmit={this.onSubmit}>
                    {editing}
                </form>
            </li>
        )
    }
}

export default Task;