import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class Task extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
            edit: false,
        };

        this.onLabelClick = () => {
            this.setState((state) => {
                return {
                    done: !state.done
                }
            })
        };

        this.onEditClick = () => {
            const { edit } = this.state;

            if(edit === false) {
                this.setState({
                    edit: true
                })
            }
        };

        this.onKeyUp = (e) => {

            if (e.keyCode === 13) {
                this.setState({
                    edit: false
                });
            }
        }
    }

    render () {
        const { item } = this.props;
        const { done, edit } = this.state;


        let label = item.label;
        let editing = '';
        let classNames = '';

        if (done) {
            classNames += ' completed';
        }

        if (edit) {
            classNames += ' editing';
            editing = <input type="text" className="edit" placeholder="Editing task"/>;
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description" onClick={this.onLabelClick}>{label}</span>
                        <span className="created">{formatDistanceToNow(Date.now(), {addSuffix: true})}</span>
                    </label>
                    <button className="icon icon-edit" onClick={this.onEditClick} onKeyUp={this.onKeyUp}/>
                    <button className="icon icon-destroy" onClick={this.props.onDeleted}/>
                </div>
                {editing}
            </li>
        )
    }
}

export default Task;