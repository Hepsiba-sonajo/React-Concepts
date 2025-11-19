import React from "react";



function NameDisplay ({name, Ongreet}) {



    return(
        <div>
          <h1>Hello... {name}</h1>
          <button onClick={Ongreet}>Click Me</button>
        </div>
    )
}

export default NameDisplay;