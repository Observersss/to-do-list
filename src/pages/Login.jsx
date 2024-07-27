import React, {useContext} from 'react';
import {AuthContext} from "../components/context/index.js";
import MyInput from "../components/UI/input/MyInput.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={login} style={{display:"flex",flexDirection:"column", gap:10}}>
                <MyInput type={'text'} placeholder={'Login...'}/>
                <MyInput type={'password'} placegolder={'12134...'}/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;