import classes from "./navbar.module.css";
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__left__content}>
                <h1>To-Do List</h1>
            </div>
            <div className={classes.navbar__right__content}>

            </div>
        </div>
    );
};

export default Navbar;