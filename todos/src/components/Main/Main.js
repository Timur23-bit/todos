import React from "react";
import TaskList from "../TaskList";
import PropTypes from "prop-types";


export default function Main ({data, onDeleted, onToggleDone, onToggleEdit, editItem}) {
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

Main.defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    onToggleEdit: () => {},
    editItem: () => {}
};

Main.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    editItem: PropTypes.func
};