// 29	Show top 3 highest scoring students.
// 	✅ Displays only top 3.


import React from "react";
import { useState } from "react";

const students = [
  { id: 1, name: "Alice", score: 92 },
  { id: 2, name: "Bob", score: 85 },
  { id: 3, name: "Charlie", score: 78 },
  { id: 4, name: "David", score: 95 },
  { id: 5, name: "Emma", score: 88 },
  { id: 6, name: "Frank", score: 91 },
  { id: 7, name: "Grace", score: 95 },   // tie
  { id: 8, name: "Helen", score: 67 },
  { id: 9, name: "Ian", score: 88 },     // duplicate score
  { id: 10, name: "Julia", score: 73 },
  { id: 11, name: "Kyle", score: 95 },   // triple tie
  { id: 12, name: "Liam", score: 85 },   // duplicate score
  { id: 13, name: "Mia", score: 92 },    // duplicate score
  { id: 14, name: "Noah", score: 60 },
  { id: 15, name: "Olivia", score: 82 }
];


function TopHighest () {

     const [highest, setHighest] = useState([]);
     

     const handleClick = () => {
       
        const sorted = [...students].sort((a,b) =>  b.score-a.score );
        const topStudents =  sorted.slice(0,5);
        setHighest(topStudents);
       

     }

    return(
        <div>
        <h1>All Student Lists</h1>
        <ul>
        {students.map((student) => <li key={student.id}>{student.name} — {student.score}</li>)}
        </ul>
        <h3>Top 5 Students</h3>
        <button onClick={handleClick}>Top 5</button>
            {highest.length > 0 && (  // <-- only show if array is not empty
        <ul>
        {highest.map((student) => <li key={student.id}>{student.name} — {student.score}</li>)}
        </ul>
        )}
        </div>
    )

}


export default TopHighest;




// ✅ What this does

// showTop → tracks if Top 5 list is visible
// Clicking the button:
// Sorts students
// Slices top 5
// Toggles visibility
// Button text changes dynamically: "Show Top 5" ↔ "Hide Top 5"
// Top 5 list only renders if showTop === true /* }



// function TopHighest() {
//   const [showTop, setShowTop] = useState(false); // toggle visibility
//   const [isAscending, setIsAscending] = useState(true);
//   const [topStudents, setTopStudents] = useState([]);

//   const handleClick = () => {
//     const sorted = [...students].sort((a, b) =>
//       isAscending ? b.score - a.score : a.score - b.score
//     );

//     setTopStudents(sorted.slice(0, 5)); // top 5
//     setShowTop(!showTop);                // toggle visibility
//     setIsAscending(!isAscending);        // optional: toggle sort order
//   };

//   return (
//     <div>
//       <h1>All Student Lists</h1>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.name} — {student.score}
//           </li>
//         ))}
//       </ul>

//       <h3>Top 5 Students</h3>
//       <button onClick={handleClick}>
//         {showTop ? "Hide Top 5" : "Show Top 5"}
//       </button>

//       {showTop && (
//         <ul>
//           {topStudents.map((student) => (
//             <li key={student.id}>
//               {student.name} — {student.score}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default TopHighest;
