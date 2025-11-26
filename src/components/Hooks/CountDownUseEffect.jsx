// Implement a countdown timer using useEffect.
// ✅ Auto-update a counter every 2 seconds.
// ✅ Counter increases automatically.

import React from "react";
import { useState,useEffect } from "react";


function CountDownUSeEffect() {
 
    const [count, setCount] = useState(0)

    useEffect ( () =>{
   const timer =  setTimeout (() => {setCount ((count) => count + 2 ) }, 1000)
    return () => clearTimeout(timer)
    },[count])

   
    return(
        <div>
            <h1>Countdown By 2</h1>
            <h2>{count}</h2>
        </div>
    )
}


export default CountDownUSeEffect;
