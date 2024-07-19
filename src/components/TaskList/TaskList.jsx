import React from 'react';
import TaskItem from "../TaskItem/TaskItem.jsx";
import MyButton from "../UI/button/MyButton.jsx";

const TaskList = ({tasks}) => {
    return (
        <div>
            {tasks.map((task, index) =>
                <TaskItem key={task.id} task={task} number={index + 1}/>
            )}
        </div>
    );
};

export default TaskList;