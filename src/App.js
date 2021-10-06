import React, {Component, useState} from "react";
import "./style.css";

export default function App() {


    
    const [task, setTask] = useState('')
    const [todoList, setTodoList] = useState([])

    return (
        <div class="main">
            <div class="addTask">
            <input type="text" value={task} onChange={(e) => {
                setTask (e.target.value);
            }}/>
            <button class="btnStyle" onClick={() => {
                if (task!='') {
                    setTodoList([...todoList, task]);
                    setTask('');
                }
                else {
                    alert("Task cannot be empty!!!");
                }
            }
                
            }>Add Task</button>
            </div>
            <div class="taskList">
                <ul>
                    {todoList.map((task, i) => {
                        return (
                            <li key={i}>
                                {task}
                                <button>Delete</button>
                            </li>
                            
                        );
                    })}
                </ul>
            </div>
        </div>

    )
}