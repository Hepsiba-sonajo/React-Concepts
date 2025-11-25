// Display how many days are left until New Year.
// ✅ Shows: 93 days left.

import React from "react";
import { useState, useEffect } from "react";


function DaysUntilNewYear() {
 
    const [daysLeft, setDaysLeft] = useState(0)

    useEffect(() =>{
      const today = new Date()
      const nextYear = today.getFullYear() +1
      const newYear = new Date(`${nextYear}-01-01`); // January 1st of next year
      const  diffTime = newYear - today; // difference in milliseconds
      const diffDays = Math.ceil(diffTime/(1000*60*60*24)) //Convert milliseconds → days:1000 ms × 60 sec × 60 min × 24 hours
      setDaysLeft(diffDays)
    },[])


    return(
        <div>
            <h2>{daysLeft} - days left to complete 2025</h2>
        </div>
    )
}

 export default DaysUntilNewYear;