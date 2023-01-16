import React from 'react';
//import css//
import './TodoList.css';

//functional component//
const TodoList = () => {
    return (
        <>
            <div className='header'>
                <h3>Todo List</h3>
                <button className='btn btn-primary'>Create Task</button>
            </div>

            <div className="Task">

            </div>
        </>
    );
};

export default TodoList;