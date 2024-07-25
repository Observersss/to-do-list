import React from 'react';
import classes from "./TaskItem.module.css";
import MyButton from "../UI/button/MyButton.jsx";
import ComplexityTask from "../../ComplextityTask/ComplexityTask.jsx";

const TaskItem = (props) => {
    return (
        <div className={classes.task}>
            <div className={classes.task__content}>
                <h2>{props.task.title}</h2>
                <p>{props.task.body}</p>
            </div>
            <div className={classes.task__option__content}>
                <ComplexityTask complexity={props.task.complexity}/>
                <div className={classes.task_option__button} >
                    <MyButton onClick={() => props.remove(props.task)} remove={true}>Remove</MyButton>
                    <MyButton onClick={() => props.openChangeModalTask(props.task)} change={true}>Change</MyButton>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;