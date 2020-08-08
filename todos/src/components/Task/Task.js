import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from "prop-types";

export default class Task extends Component {


    state = {
        // eslint-disable-next-line react/destructuring-assignment
        label: this.props.item.label
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line react/destructuring-assignment
        this.props.editItem(this.props.data, this.props.item.id, 'edit', event);
    };

    render () {
        const { item, onDeleted, onToggleDone, onToggleEdit } = this.props;
        const {edit, done} = item;
        const {label} = this.state;

        let editing = '';
        let classNames = '';
        let checked = '';
        if (done) {
            classNames += ' completed';
            checked += 'checked'
        }

        if (edit) {
            classNames += ' editing';
            editing = <input
                type="text"
                className="edit"
                onChange={this.onLabelChange}
                value={label}
            />;
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      onChange={onToggleDone}
                      checked={checked}/>
                    <label>
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <span
                            className="description"
                            onClick={onToggleDone}>
                            {label}
                        </span>
                        <span
                            className="created">
                            {`created ${  formatDistanceToNow(Date.now(), {addSuffix: true})}`}
                        </span>
                    </label>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                        type="button"
                        className="icon icon-edit"
                        onClick={onToggleEdit}
                    />
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                        type="button"
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
    // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
    item: PropTypes.object,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    editItem: PropTypes.func
};