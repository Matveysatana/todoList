import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterValuesType = 'all'| 'completed' | 'active';

function App() {


   let [tasks, setTasks] = useState< Array<TaskType> > ([
    { id: 1, title: 'CSS&HNML', isDane: true },
    { id: 2, title: 'JS', isDane: true },
    { id: 3, title: 'React', isDane: false },
    { id: 4, title: 'Redux', isDane: false },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>('all')

  function removeTask(id: number) {
    let filderedTask = tasks.filter(t =>  t.id !== id )
    setTasks(filderedTask);
  }

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
                changeFilter={changeFilter} />
    </div>
  );
};

export default App;

