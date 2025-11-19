import React from "react";
import { useState } from "react";



function Counter(){
 
    const [count, setcount] = useState(0);


    const handleIncrement = () => {
        setcount(count +2);
    }

    const handleDecrement = () => {
        setcount(count-2)
    }

    const handleReset = () => {
        setcount(0)
    }


    return(
        <div>
        <h1>Conter By Two</h1>
        <h2>{count}</h2>
        {/* <button onClick={handleIncrement}> Increment </button> */}
         <button onClick={ () => setcount(count+2)}> Increment </button>
        
        <button onClick={handleDecrement}> Decrement </button>
        <button onClick={handleReset}> Reset </button>
        </div>
    )
}


export default Counter;