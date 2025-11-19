// Create a dropdown menu that updates state when an option is selected.


import React from "react";
import { useState } from "react";



function DropDown(){

const [item, setItem] = useState("")


const handleChange = (e)=> {
  setItem(e.target.value);
  
}
    return(
        <di>
            <select value={item} onChange={handleChange}>
                <option value="">Select an Option</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="Javascript">Javascript</option>
                <option value="Kotlin">Kotlin</option>
            </select>
            <p>{item}</p>
        </di>
    )
}


 export default DropDown;