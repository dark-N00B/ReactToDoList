import React, {Component, useState} from "react";
import "./style.css";

export default function App() {


    
    const [task, setTask] = useState('')
    const [todoList, setTodoList] = useState(["Click 'Add Task' button to create a new task","Click on the task to mark it as done","Click the delete button on the right to delete completed tasks"])

    function onDelete(i) {
        const newList = todoList.filter((task, index) => {
            return index!==i;
        });

        setTodoList(newList);
    }

    function addTask () {
        if (task!='') {
            setTodoList([...todoList, task]);
            setTask('');
        }
        else {
            alert("Task cannot be empty!!!");
        }
    }

    return (
        <div class="main">
            <div class="header">
                <h2>To-Do List</h2>
                <div class="addTask">
                    <input type="text" value={task} onChange={(e) => {
                        setTask (e.target.value);
                    }} onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            addTask();
                        }
                    }}/>
                    <button class="addBtn" onClick={() => {
                        addTask();
                    }
                        
                    }>Add Task</button>
                </div>
            </div>
            <div class="taskList">
                <div class="listStyle">
                    {todoList.map((task, i) => {
                        return (
                            <div onClick={(e) => {
                                e.target.classList.toggle('taskDone');
                                }
                            } class="task" key={i}>
                                
                                {task}
                                <button class="delBtn" onClick={(e) => {
                                    e.target.style.textDecoration = "none";
                                    onDelete(i);
                                    }}>X</button>
                            </div>
                            
                        );
                    })}
                </div>
            </div>

            {() => {
                if (todoList.length != 0) {
                    return (
                        <div class="clearAll">
                            <button class="clearBtn" onClick={()=>{
                                setTodoList([])
                            }}>Clear All</button>
                        </div>
                    )
                }
                else return <div>0</div>
            }}
        </div>

    )
}