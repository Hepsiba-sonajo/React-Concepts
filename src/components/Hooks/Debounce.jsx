


import React from "react";
import { useState, useEffect } from "react";
import useDebounce from "./DebounceHook";

function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000); // 1 second delay

  useEffect(() => {
    if (debouncedQuery) {
      // Call API or perform action
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Debounced Value: {debouncedQuery}</p>
    </div>
  );
}

export default SearchInput;

// function Debounce () {

// const [query, setQuery] = useState("")


// useEffect( () => {
// const handler =  setTimeout(() => {
//         if(query){
//             console.log("Search for ..." , query)
//         }
//     }, 300)

// return () => clearTimeout(handler)

// },[query])

//     return(
//         <div>

//       <input type="text"
//              value={query}
//              placeholder="Search for ..."
//              onChange={(e) => setQuery(e.target.value) }
//        />
//         </div>
//     )
// }

// export default Debounce;