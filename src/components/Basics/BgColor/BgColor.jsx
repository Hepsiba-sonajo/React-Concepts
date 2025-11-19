import React from "react";
import { useState } from "react";
import "./BgColor.css";


function BgColor() {
 
    const [dark, setdark] = useState(false)

    return(
        <div className={dark ? "dark-bg" : "light-bg"} style={{height: "100vh"}}>
        <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
       <label className="switch">
       <input type="checkbox"  checked={dark} onChange={() => setdark(!dark)}/>
       <span className="slider"></span>
      </label>
      </div>
    )
}

export default BgColor;