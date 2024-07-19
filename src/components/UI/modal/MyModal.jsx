import React from 'react';
import classes from "./MyModal.module.css";
const MyModal = ({children,visible,setVisible}) => {

    const myModal = [classes.MyModal];
    const myModalContent = [classes.MyModal__content];

    if (visible){
        myModal.push(classes.MyModal__active);
    }

    return (
        <div className={myModal.join(' ')} onClick={e =>setVisible(false)}>
            <div className={myModalContent.join('')} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;