//  Show today’s date in DD/MM/YYYY format.
//  ✅ Displays: 29/09/2025.
//  Show the day of the week for a selected date from a date picker.
//  ✅ Picking 2025-12-25 → Displays Thursday.



 import React from "react";
 import { useState } from "react";

 function DatePicker () {

    // const today = new Date() - This means , directly giving date object
    const today = new Date().toISOString().split("T")[0]
    console.log(today)
    
    
// Convert date to ISO format
// → "2025-11-22T14:35:10.123Z"

// Split at "T"
// → ["2025-11-22", "14:35:10.123Z"]

// Take the first part
// → "2025-11-22"

    
    const [date, setDate] = useState(today) 
    const [dayName, setDayName] = useState(""); 

const formateDate = (date) => {
    const[year, month, day] = date.split("-");
    return `${day}/${month}/${year}`
}

 const handleChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const options = { weekday: "long" }; // full day name
    const day = selectedDate.toLocaleDateString("en-US", options);
    setDate(e.target.value);
    setDayName(day);
  };


   
    return(
        <div>
            <h1>Date Picker</h1>
            <input 
            type="date"
            value={date}
            min={today}
            onChange={ handleChange} />

            <h2>Your Picked Date : {formateDate(date)} is a {dayName}</h2>
        </div>
    )
 }

 export default DatePicker;
