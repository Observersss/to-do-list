import React from 'react';
import classes from "./MyButton.module.css";
const MyButton = ({children,...props}) => {
    const myBtn = [classes.Mybtn];

    if (props.change === true){
        myBtn.push(classes.Mybtn__change);
    }else if(props.remove === true){
        myBtn.push(classes.Mybtn__remove);
    }

    return (
        <button className={myBtn.join(' ')} {...props}>
            {children}
        </button>
    );
};

export default MyButton;