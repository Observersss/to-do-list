import './App.css'
import Navbar from "./components/UI/navbar/navbar.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import React, {useState} from "react";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";

function App() {
    let [tasks,setTasks] = useState( [
        {id:1,title:"Start:",body:"You can add/remove/complete/change yours task.\n" +
                "                        Click on this task for open menu"},
        {id:2,title:"Cleaning",body: "Need clean my table"},
    ]);
    const [modal, setModal] = useState(false);

    const createTask = (newTask) => {
        setTasks([...tasks,newTask]);
        setModal(false);
    };

  return (
      <>
          <Navbar/>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
              <h1 style={{margin: "1em"}}>Yours task:</h1>
              <MyButton onClick={() => setModal(true)}>Add task</MyButton>
          </div>
          <MyModal visible={modal} setVisible={setModal}>
              <TaskForm create={createTask}/>
          </MyModal>
          <TaskList tasks={tasks} title={"Your tasks:"}/>
      </>
  )
}

export default App
