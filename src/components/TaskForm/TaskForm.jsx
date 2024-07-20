import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import MyButton from "../UI/button/MyButton.jsx";
import classes from "./TaskForm.module.css";

const TaskForm = ({create}) => {

    const[task,setTask] = useState({title:'',body:''});

    const AddNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task,
            id: Date.now(),
        };
        create(newTask);
        setTask({title: '',body:''});
    }

    return (
        <form className={classes.taskForm}>
            <div>
                <h4>Name of task:</h4>
                <MyInput
                    value={task.title}
                    type={'text'}
                    placeholder={'Name'}
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
            <MyButton onClick={AddNewTask}>Create task</MyButton>
        </form>
    );
};

export default TaskForm;