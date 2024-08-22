
import { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const addTodo = () => {
    if(input.trim()) {
        setTodos([...todos, { text : input,  completed : false}])
        setInput('')

    }
  }

  const togglecompelete = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed =  !newtodos[index].completed;
    setTodos(newtodos)
  }

  const deleteTodo =(index,e) => {
    e.stopPropagation();
    const newtodos =  todos.filter((_, i) =>  i !== index);
    setTodos(newtodos);
  }
  return (
    <div>
      <h1> To-Do List </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new Task"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ padding : '0', listStyle:'none'  }}>
           {
            todos.map((todo, index) => (
                <li key={index} style={{ textDecoration :  todo.completed? 'line-through' : 'none',  cursor : 'pointer'  }}  onClick={ () => togglecompelete(index)}>{todo.text}
                <button onClick={(e) => deleteTodo(index,e)} style={{ marginLeft: '10px'}}>Delete </button>

                </li>
                
            ))
           }

      </ul>
    </div>
  );
};

export default Todolist;
