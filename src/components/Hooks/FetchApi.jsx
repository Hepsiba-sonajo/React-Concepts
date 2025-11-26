// Fetch a list of posts from https://jsonplaceholder.typicode.com/posts and display titles.
// ✅ Displays a list of post titles.
// ✅ Show a loading message while fetching API data.
// ✅ Displays Loading... until data arrives.
// ✅ Fetch once on mount and never refetch.
// ✅ API data shown only once.
// ✅ Show an error message if API call fails.
// ✅ Displays Error fetching data.


import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";

function FetchApi(){

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetchData()
    }, [])
    

async function fetchData  () {
    setLoading(true);
    setError("");
    try{
         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
         console.log(response)
         
            const data = await response.data
            console.log(data)
            setPosts(data)
         
    }

    catch(err) {
        setError(err.message || "Something went wrong")
    }
    finally{
        setLoading(false)
    }
}

if (error) return <p>Error: {error}</p>;
 if(loading){
      return <p>Loading...</p>
    }




    return(
        <div>
            <ul>
                {
                    posts.map((post) => (<li key={post.id}>{post.title}</li>))
                }
            </ul>
        </div>
    )
}

export default FetchApi;