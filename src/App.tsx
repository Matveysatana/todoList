import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {
  return (
    <div className="App">
      <Todolist title='WHAT TO LEARN' task={task1}/>
      <Todolist title='Movies'task={task2}/>
    </div>
  );
}
let task1 = [
  {id:1 , title: 'CSS&HNML' ,isDane: true},
  {id:2 , title: 'JS' ,isDane: true},
  {id:3 , title: 'React' ,isDane: false},
]
let task2 = [
  {id:1 , title: 'Terminftor' ,isDane: true},
  {id:2 , title: 'Naruto' ,isDane: true},
  {id:3 , title: 'Jentalments' ,isDane:true},
]

export default App;

