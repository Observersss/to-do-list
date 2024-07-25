import React, {useEffect, useState} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import MyButton from "../UI/button/MyButton.jsx";
import classes from "./TaskForm.module.css";

const TaskForm = ({create,currentTask,change}) => {

    const[task,setTask] = useState({title:'',body:'',complexity:0});

    useEffect(() => {
        if(currentTask){
            setTask(currentTask);
        }else {
            setTask({ title: '', body: '',complexity: 0});
        }
    }, [currentTask]);

    const Action = (e) => {
        e.preventDefault();

        if (task.title.trim() === '') {
            alert("Title can`t be empty");
            return;
        }

        if (currentTask){
            change(task);
        }else{
            const newTask = {
                ...task,
                id: Date.now(),
            };
            create(newTask);
        }
        setTask({title: '',body:'',complexity:0,});
    }

    return (
        <form className={classes.taskForm}>
            <div>
                <h4>Name of task:</h4>
                <MyInput
                    value={task.title}
                    type={'text'}
                    placeholder={'Name'}
                    required
                    onChange={e => setTask({...task, title: e.target.value})}
                />
            </div>
            <div>
                <h4>Description:</h4>
                <MyInput
                    value={task.body}
                    type={'text'}
                    placeholder={'Need...'}
                    onChange={e => setTask({...task, body: e.target.value})}
                />
            </div>
            <div>
                <h4>Complexity:</h4>
                <MyInput
                    value={task.complexity}
                    type={"number"}
                    min={0}
                    max={3}
                    maxLenght={1}
                    onChange={e => setTask({...task,complexity: Number(e.target.value)})}
                />
            </div>
            <MyButton onClick={Action}>{currentTask ? 'Change task' : 'Create task'}</MyButton>
        </form>
    );
};

export default TaskForm;