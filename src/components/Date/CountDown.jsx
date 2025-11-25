//  Create a countdown timer starting from 10 seconds.
//  ✅ Displays 10, 9, 8... until 0.


import React from "react";
import { useEffect, useState } from "react";


function CountDown() {
   const [count, setCount] = useState(10)

   useEffect (() => {
    if (count <= 0) return; // stop at 0
   const timer =  setTimeout(() => {
        setCount((count) => count - 1)
    }, 1000);
    return () => clearTimeout(timer); // cleanup
   },[count] )


    return(
        <div>
            <h1>count down - {count}</h1>
        </div>
    )
}


export default CountDown;