import React from "react";
import { BrowserRouter, Link } from "react-router-dom";


function Home() {

    return(

        <>
<nav>
    <ul style={{display: "flex", gap:"20px"}}>
        <li>
            <Link to= "/">Home</Link>
        </li>
        <li>
            <Link to= "/about">About</Link>
        </li>
        <li>
            <Link to= "/contact">Contact</Link>
        </li>
        <li>
            <Link to= "/users">Users</Link>
        </li>
        <li>
            <Link to= "/login">Login</Link>
        </li>
    </ul>
  </nav>


        <div>
            <h1>Home</h1>
        </div>
        </>
    )
}


export default Home;