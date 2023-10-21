import React, { useState } from 'react';
import './App.css';
import {  Todolist } from './Todolist';
import { v1 } from 'uuid';



export type FilterValuesType = 'all'| 'completed' | 'active';

function App() {

  
   let [tasks, setTasks] = useState ([

    { id: v1(), title: 'CSS&HNML', isDane: true },
    { id: v1(), title: 'JS', isDane: true },
    { id: v1(), title: 'React', isDane: false },
    { id: v1(), title: 'Redux', isDane: false },
    { id: v1(), title: 'GitHub', isDane: true },
    { id: v1(), title: 'School', isDane: false },
  ]);

  function removeTask(id: string) {
    let filderedTask = tasks.filter(t =>  t.id !== id )
    setTasks(filderedTask);
  }

  function AddTask(title: string) {
    let newTask = {
      id: v1(), 
      title: title,
      isDane: false
    };
    let nevTasks = [newTask, ...tasks];
    setTasks(nevTasks)
  }


  let [filter, setFilter] = useState<FilterValuesType>('all')

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }


  let taskForTodolist = tasks;
  if (filter === 'completed') {
    taskForTodolist = tasks.filter(t => t.isDane === true);
  }
  if (filter === 'active') {
    taskForTodolist = tasks.filter(t => t.isDane === false);
  }

  return (
    <div className="App">
      <Todolist title='WHAT TO LEARN'
                tasks={taskForTodolist} 
                removeTask={removeTask}
                changeFilter={changeFilter}
                AddTask={AddTask} />
    </div>
  );
};

export default App;

