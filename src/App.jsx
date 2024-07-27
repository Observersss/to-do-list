import './App.css'
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/navbar.jsx";
import AppRouter from "./components/AppRouter/AppRouter.jsx"
import {AuthProvider} from "./components/AuthContext/AuthContext.jsx";

function App() {
    const [isAuth,setIsAuth] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    }, []);

  return (
      <>
          <AuthProvider isAuth={isAuth} setIsAuth={setIsAuth}>
              <BrowserRouter>
                  <Navbar/>
                  <AppRouter/>
              </BrowserRouter>
          </AuthProvider>
      </>
  )
}

export default App
