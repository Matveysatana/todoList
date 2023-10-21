
import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { FilterValuesType } from "./App";

 export type TaskType = {
  id: string,
  title: string,
  isDane: boolean,
}


type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  AddTask: (title: string) => void 
}
export function Todolist(props: PropsType) {

  const [ newTaskTatile, setnewTaskTatile] = useState ('')

  const onChangeHolder = (e: ChangeEvent<HTMLInputElement>) => {
    setnewTaskTatile(e.currentTarget.value)
  }

  const onKeyPressHolder = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
      props.AddTask(newTaskTatile); 
      setnewTaskTatile('')
      }
  }
  const addTask = () => {
    props.AddTask(newTaskTatile) ; setnewTaskTatile('')
  }
  const onAllClickHolder = () =>  props.changeFilter ('all');
  const onActiveClickHolder = () =>  props.changeFilter ('active');
  const onCompletedClickHolder = () =>  props.changeFilter ('completed');
  
  return (
    <div>
    <h3>{props.title}</h3>
    <div>

    <input value={newTaskTatile}
           onChange={onChangeHolder}
           onKeyPress={onKeyPressHolder} />
    <button onClick={addTask}>+</button>

      </div>
      <ul>
        {
          props.tasks.map(t => {
            const RemoveHandler = () => {  props.removeTask(t.id)  } 
         return <li key={t.id}>
          <input type='checkbox' checked={t.isDane} />
          <span>{t.title}</span>
          <button onClick={RemoveHandler }> X </button>
          </li>
          } )
        }
      </ul>
      <div>
        <button onClick={onAllClickHolder }>All</button>
        <button onClick={onActiveClickHolder}>Active</button>
        <button onClick={onCompletedClickHolder}>Completed</button>
      </div>
    </div>
  )
}
