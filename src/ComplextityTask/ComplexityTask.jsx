import React from 'react';
import classes from "./ComplexityTask.module.css";
const ComplexityTask = ({complexity}) => {

   const complexityItems = [classes.complexity__content__item__1,classes.complexity__content__item__2,classes.complexity__content__item__3];
    return (
        <div className={classes.complexity__content}>
            {complexityItems.map(
                (item,index) =>
                <div
                    key={index}
                    className={`${item} ${complexity > index ? classes.complexity__content__item__ACTIVE : ''}`}
                ></div>
            )}

        </div>
    );
};

export default ComplexityTask;