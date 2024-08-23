import { useState } from "react"


const Todolist = () => {
const [todos,  setTodos] = useState([])
const [input, setInput] = useState('')




const addTodo = () => {
  if(input.trim()) {
    setTodos([...todos, { text : input , completed : false}])
    setInput('')
  }
}

const toggleComplete = (index) => {
  
const newTodos = [...todos] 
newTodos[index].completed = !newTodos[index].completed

setTodos(newTodos)  
}

const deletetodo = (index, e) => {
  e.stopPropagation()
  const newTodos = todos.filter((_,i) => i !== index) 
  setTodos(newTodos)
}

  return (
    <div>
        Todo List 
      <div>
        <input 
         type="text"
         value={input}
         placeholder="Add  Todo Item"
         onChange={(e) =>  setInput(e.target.value)}
        
          />
          <button onClick={addTodo}>Add todo</button>
          <ul>
            {
              todos.map((todo, index) => (
                <li key={index} 
                 style={{ 
                    textDecoration :  todo.completed ? 'line-through' : 'none',
                    cursor : 'pointer'
                 }}
                
                
                 onClick={(e) =>  toggleComplete(index,e)}>{todo.text}

                  <button onClick={(e) => deletetodo(index, e)}>Delete</button>
                 </li>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Todolist
