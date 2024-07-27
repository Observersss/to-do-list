import classes from "./navbar.module.css";
import {useContext} from "react";
import {AuthContext} from "../../context/index.js";
import {Link} from "react-router-dom";
const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const handleLogout = () =>{
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__left__content}>
                <h1>To-Do List</h1>
            </div>
            <div className={classes.navbar__right__content}>
                <Link to={'/about'} >About</Link>
                <Link to={'/tasks'} >Tasks</Link>
                {isAuth
                    ? <Link to={'/login'} onClick={handleLogout}>Log out</Link>
                    : <Link to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;