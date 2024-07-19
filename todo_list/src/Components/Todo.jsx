import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItem from './TodoItem';

let count = 0;
export const Todo = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  const add = () => {
    setTodos([...todos, {no: count++, text:inputRef.current.value, display: ""}]);
    inputRef.current.value = "";
  }

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, todos);

  return (
    <div>
      <div className='todo'>
      <div className="todo-header">To-D0 List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your Task' className='todo-input'/>
        <div className="todo-add-btn" onClick={() => {add()}} >ADD</div>
        <div className="todo-list">

          {todos.map((index, item) => {
             return <TodoItem key={index} no={item.no} display={item.display} text={item.text} />
          })}
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Todo