
import React from "react";

type TaskType = {
    id:number,
    title:string,
    isDane:boolean,
}


type PropsType = {
    title:string
    task: Array<TaskType>
}
export function Todolist(props: PropsType) {
    return(
      <div>
       <h3>{props.title}</h3>
       <div>
        <input/> 
        <button>+</button>
       </div>
       <ul>
        <li><input type='checkbox'checked={props.task[0].isDane}/><span>{props.task[0].title}</span></li>
        <li><input type='checkbox'checked={props.task[1].isDane}/><span>{props.task[1].title}</span></li>
        <li><input type='checkbox'checked={props.task[2].isDane}/><span>{props.task[2].title}</span></li>
  
       </ul>
       <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
       </div>
      </div>
    )
  } 
 