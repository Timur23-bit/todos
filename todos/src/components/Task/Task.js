import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from "prop-types";

export default class Task extends Component {
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

Task.defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    onToggleEdit: () => {},
    editItem: () => {}
};

Task.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    item: PropTypes.object.isRequired,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    editItem: PropTypes.func
};