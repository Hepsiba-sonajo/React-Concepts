// 26	Sort a list of numbers ascending/descending with a button toggle.
// 	✅ Numbers rearrange order.
// 27	Sort users alphabetically by name.
// 	✅ List goes from A → Z.
// 28	Remove duplicates from an array before rendering.
// 	✅ [1,2,2,3] → shows 1,2,3.

import React from "react";
import { useState } from "react";
import "../Basics/BgColor/BgColor.css"


const Numbers = [2,3,4,9,6,1,3,9]
const Names = {
  "people": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" },
    { "id": 4, "name": "David" },
    { "id": 5, "name": "Emma" },
    { "id": 3, "name": "Charlie" }
  ]
}

function AscDec () {
     
    const [number, setNumber] = useState(Numbers);
    const [names, setNames] = useState(Names);
    const [isAscending, setisAscending] = useState(true)

    const handleReverse = () => {
        const sorted = [...number].sort((a, b) => isAscending ? a - b : b - a)
        const remove_duplicate = new Set([...sorted]) 
        setNumber(remove_duplicate);
        setisAscending(!isAscending)
    }

    const handleAlphabet = () => {
        const sorted = [...names.people].sort((a, b) => isAscending
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name))
 
    // Remove duplicates by id
  const unique = Array.from(
    new Map(sorted.map(p => [p.id, p])).values()
  );
    // const unique = Array.from(new Map(sorted.map(p => [p.id,p]))).values()
        setNames({people : unique});
        setisAscending(!isAscending)
    }
      
    return(
        <div>
            <h1>Ascending-Decending</h1>
            <h2>{number}</h2>
            <label className="switch">
            <input type="checkbox"  checked={number} onChange={handleReverse}/>
            <span className="slider"></span>
            </label>

            <ul>
                {names.people.map((person) => <li key={person.id}>{person.name}</li>)}
            </ul>
            <button onClick={handleAlphabet}> Sort
        {/* Sort {isAscending ? "Z → A" : "A → Z"} */}
      </button>
        </div>
    )
}

export default AscDec;