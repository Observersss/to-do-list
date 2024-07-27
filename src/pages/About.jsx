import React from 'react';
import ButtonCreateTask from '../img/ButtonCreateTask.png'
import ModalAddTask from '../img/ModalAddTaskl.png'
import '../App.css'
const About = () => {
    return (
        <div className={'container'}>
            <h1 style={{fontSize:'3em'}}>Welcome to easy To-Do!</h1>
                <h1>You can create new to-do:</h1>
                <div className={'container__for__images'}>
                    <div className={'image-container'}>
                        <img src={ButtonCreateTask} alt="ff"/>
                    </div>
                    <div className={'image-container'}>
                        <img src={ModalAddTask} alt="gg"/>
                    </div>
                </div>
        </div>
    );
};

export default About;