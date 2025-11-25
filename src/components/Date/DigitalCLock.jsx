// Build a digital clock showing hours, minutes, and seconds.
// ✅ Displays: 14:05:23.


import React from "react";
import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(""); // store time string

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    tick(); // initialize immediately
    const timer = setInterval(tick, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export default DigitalClock;


// function DigitalClock() {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const tick = () => {
//       const now = new Date();
//       let hours = now.getHours();
//       const minutes = String(now.getMinutes()).padStart(2, "0");
//       const seconds = String(now.getSeconds()).padStart(2, "0");

//       const ampm = hours >= 12 ? "PM" : "AM";
//       hours = hours % 12 || 12; // convert 0 → 12, 13 → 1
//       const formattedHours = String(hours).padStart(2, "0");

//       setTime(`${formattedHours}:${minutes}:${seconds} ${ampm}`);
//     };

//     tick(); // initialize immediately
//     const timer = setInterval(tick, 1000);

//     return () => clearInterval(timer); // cleanup
//   }, []);

//   return (
//     <div>
//       <h2>{time}</h2>
//     </div>
//   );
// }

// export default DigitalClock;
