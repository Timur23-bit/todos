import React from "react";
import formatDistanceToNow from '../date-fns-master/src/formatDistanceToNow';

function Task ({item}) {
    if (item.className === 'editing'){
        return (
            <li className={item.className}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{item.label}</span>
                        <span className="created">{formatDistanceToNow( Date.now(), {addSuffix: true})}</span>
                    </label>
                    <button className="icon icon-edit"/>
                    <button className="icon icon-destroy"/>
                </div>
                <input type="text" className="edit" placeholder="Editing task"/>
            </li>
        )
    } else {
        return (
            <li className={item.className}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{item.label}</span>
                        <span className="created">{formatDistanceToNow( Date.now(), {addSuffix: true})}</span>
                    </label>
                    <button className="icon icon-edit"/>
                    <button className="icon icon-destroy"/>
                </div>
            </li>
        )
    }

}

export default Task;