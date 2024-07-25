import React from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import MySelect from "../UI/select/MySelect.jsx";

const TaskFilter = ({filter,setFilter}) => {
    return (
        <div style={{display:"flex",justifyContent:"flex-start"}}>
            <MyInput
                placeholder={"Find..."}
                value={filter.query}
                onChange={e => setFilter({...filter,query:e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
                defaultValue={"Sort"}
                options={[
                    {value:'title',name:"By title"},
                    {value:'body',name:'By body'},
                    {value:'complexity',name:"By complexity"}
                ]}
            />
        </div>
    );
};

export default TaskFilter;