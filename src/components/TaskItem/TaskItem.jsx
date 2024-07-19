import React from 'react';
import classes from "./TaskItem.module.css";
const TaskItem = (props ) => {
    return (
        <div className={classes.task}>
            <h2>{props.task.title}</h2>
            <div>{props.task.body}</div>
        </div>
    );
};

export default TaskItem;