


import React from "react";
import { useEffect, useRef } from "react";


function AutoFocusInput () {

    // const inputRef = useRef("")
    const inputRef = useRef(null); //You don't need to initialize the ref with a string — the default is better

    useEffect(() => {
      inputRef.current?. focus()
    }, [])
    


    return(
        <div>
            <h1>Auto Focus Input with useRef</h1>
            <input  type="text" ref={inputRef}
              />
        </div>
    )
}


export default AutoFocusInput;