import React, {Component, useState} from "react";
import "./style.css";

export default function App() {


    
    const [task, setTask] = useState('')
    const [todoList, setTodoList] = useState([])

    function onDelete(i) {
        const newList = todoList.filter((task, index) => {
            return index!==i;
        });

        setTodoList(newList);
    }

    return (
        <div class="main">
            <div class="header">
                <h2>To-Do List</h2>
                <div class="addTask">
                    <input type="text" value={task} onChange={(e) => {
                        setTask (e.target.value);
                    }}/>
                    <button class="addBtn" onClick={() => {
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
            </div>
            <div class="taskList">
                <div class="listStyle">
                    {todoList.map((task, i) => {
                        return (
                            <div onClick="" class="task" key={i}>
                                
                                {task}
                                <button class="delBtn" onClick={() => {onDelete(i)}}>X</button>
                            </div>
                            
                        );
                    })}
                </div>
            </div>
        </div>

    )
}