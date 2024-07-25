import './App.css'
import Navbar from "./components/UI/navbar/navbar.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import React, {useState} from "react";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import {useTasks} from "./components/hooks/useTasks.js";
import MyInput from "./components/UI/input/MyInput.jsx";
import TaskFilter from "./components/TaskFilter/TaskFilter.jsx";

function App() {
    const [tasks,setTasks] = useState( [
        {id:1,title:"Start:",body:"You can add/remove/change yours task.", complexity:1},
        {id:2,title:"Cleaning",body: "Need clean my table",complexity:3},
    ]);
    const [modal, setModal] = useState(false);
    const [currentTask, setCurrentTast] = useState(null);
    const [filter,setFilter] = useState({sort:'',query:''});
    const sortedAndSearchedTasks = useTasks(tasks,filter.sort,filter.query);

    const createTask = (newTask) => {
        setTasks([...tasks,newTask]);
        setModal(false);
    };
    const removeTask = (newTask) => {
        setTasks(tasks.filter(task => task.id !== newTask.id));
    }
    const openChangeModalTask = (task) => {
        setCurrentTast(task);
        setModal(true);
    }
    const changeTask = (newTask) => {
        setTasks(tasks.map(task => {
            if (task.id === newTask.id){
                return {...newTask}
            }
            return task;
        }));
        setCurrentTast(null);
        setModal(false)
    }

  return (
      <>
          <Navbar/>
          <div style={{display: "flex",flexDirection:'column', justifyContent: "space-evenly", alignItems: "center"}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h1 style={{margin: "1em"}}>Yours task:</h1>
                  <MyButton onClick={() => setModal(true)}>Add task</MyButton>
              </div>

              <TaskFilter filter={filter} setFilter={setFilter}/>
          </div>
          <MyModal visible={modal} setVisible={setModal}>
              <TaskForm
                  create={createTask}
                  change={changeTask}
                  currentTask={currentTask}
              />
          </MyModal>
          <TaskList
              openChangeModalTask={openChangeModalTask}
              remove={removeTask}
              tasks={sortedAndSearchedTasks}
          />
      </>
  )
}

export default App
