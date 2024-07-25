import React from 'react';
import TaskItem from "../TaskItem/TaskItem.jsx";

const TaskList = ({openChangeModalTask,remove,tasks}) => {
    return (
        <div>
            {tasks.map((task, index) =>
                <TaskItem openChangeModalTask={openChangeModalTask} remove={remove} key={task.id} task={task} number={index + 1}/>
            )}
        </div>
    );
};

export default TaskList;