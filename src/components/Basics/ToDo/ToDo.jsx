import React, { useState } from "react";

function ToDo(){
const [todo , setTodo] = useState("");
const [lists, setlists] = useState([]);

const handleAdd = () => {
    setlists([...lists, todo]);
    setTodo("");
}

const handleDelete = (index) => {
    const updatedList = lists.filter((_ , i) => (i !== index));
    setlists(updatedList)

}

    return(
        <div>
       <div>
          <input type="text" name="todo_name"  value={todo} placeholder="Enter ToDo List" onChange={(e) => setTodo(e.target.value)}/>
          <button onClick={handleAdd}>Add</button>
       </div>
       <div>
        <ul>
           {lists.map((list , index) => <li key={index}>{list} 
           <button onClick={() => handleDelete(index)}>Delete</button></li>)}
        </ul>
       </div>
       </div>

    )
}

export default ToDo; 