import React from "react";
import { useState } from "react";


function FruitItem ({lists}) {

   const [fruitlists, setFruitlists] = useState(lists);


const handleDelete  = (id) => {
    const updated = fruitlists.filter((i) => i.id !== id)
    setFruitlists(updated);
}

const handleDeleteAll = () => {
     setFruitlists([]);
}

const handleReverse = () => {
     
    const reverse = [...fruitlists].reverse()
    setFruitlists(reverse)
}



    return(
        <div>
        <h1>Fruit List</h1>
           <ul>
            {
                fruitlists.map((li) => <li key={li.id} style={{ color : li.id % 2 ?  "green" : " Purple" }}>{li.name}
                <button onClick={() => handleDelete(li.id)}>Delete</button>
                </li>)
            }
           </ul>
           <button onClick={handleDeleteAll}>Delete All</button>
           <button onClick={handleReverse}>Reverse</button>
        </div>
    )
}

export default FruitItem;