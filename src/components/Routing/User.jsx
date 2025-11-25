import React from "react";
import { useParams , useNavigate } from "react-router-dom";



function User() {

    const {id} = useParams();
    // console.log(id, "userid")

     const navigate = useNavigate()
   console.log(navigate); //it will just show a function, nothing more.

    const handleBack = () => {
              navigate(-1)
    }


    return(
        <div>
            <h1>user - {id} </h1>
            <button onClick={handleBack}>Back</button>

        </div>
    )
}

export default User;