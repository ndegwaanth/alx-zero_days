import { useRef, useState } from "react";
import { Todo } from './Components/Todo'
import { TodoItem } from './Components/TodoItem'
import './index.css'
export const App = () => {

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App