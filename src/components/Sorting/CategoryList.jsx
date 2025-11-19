
const fruits = [
  { name: "Apple", category: "Fruit" },
  { name: "banana", category: "fruit" },
  { name: "Mango", category: "FRUIT" },
  { name: "Dragon Fruit", category: "Fruits" },

  { name: "Carrot", category: "Vegetable" },
  { name: "broccoli", category: "vegetables" },
  { name: "Spinach", category: "VEG" },
  { name: "Potato", category: "Veggies" },

  { name: "Salmon", category: "Protein" },
  { name: "Eggs", category: "protein" },
  { name: "Tofu", category: "PROTEINS" }
];

import React from "react";

function ListByCategory() {
  // Normalize category names
 const normalize = (category) => {
  const c = category.toLowerCase();
  if(c.includes("fruit"))
    return "Fruit"
 
 if(c.includes("veg"))
    return "Vegetable"
 
 if(c.includes("protein"))
    return "Protein"
  return category;
 }

 // Group dynamically

//  const grouped = fruits.reduce((acc,item) => {

//   const normalizedCat = normalize(item.category);
//   acc[normalizedCat] = acc[normalizedCat] || [];
//   acc[normalizedCat].push(item)
//   return acc;
//  }, {})

 const grouped = fruits.reduce((acc, item) => {
  const key = normalize(item.category);
  const items = acc[key] || [];
  return {
    ...acc,
    [key]: [...items, item]  // new array, new object
  };
}, {});

  return (
    <div>
    {
     
      Object.entries(grouped).map(([category , items]) =>(
        <div key={category}>
        <h2>{category}</h2>
        <ul>
          {items.map((i) =>(
            <li key={i.name}>{i.name}</li>
          ))}
        </ul>
        </div>
      ))
    }
      
    </div>
  );
}

 {/* Object.entries(grouped) converts that object into an array of key–value pairs. */}
export default ListByCategory;
