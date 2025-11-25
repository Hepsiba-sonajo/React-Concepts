import React from "react";
import Counter from "./components/Basics/Counter/Conter";
import NameDisplay from "./components/Basics/NameDisplay/NameDisplay";
import BgColor from "./components/Basics/BgColor/BgColor";
import DropDown from "./components/Basics/DropDown/DropDown";
import Card from "./components/Basics/Children/Children";
import ToDo from "./components/Basics/ToDo/ToDo";
import FruitLists from "./components/Lists_Render/FruitLists";
import FruitItem from "./components/Lists_Render/FruitsItem";
import AscDec from "./components/Sorting/AscDec";
import TopHighest from "./components/Sorting/TopHighest";
import ListbyCategory from "./components/Sorting/CategoryList";
import AllRouting from "./AllRouting";
import DatePicker from "./components/Date/ShowDate";
import CountDown from "./components/Date/CountDown";
import DaysUntilNewYear from "./components/Date/DaysUntilNewYear";
import DigitalClock from "./components/Date/DigitalCLock";



function App(){

  // const greet = () => {
  //   alert("Greetings from Jesus")
  // }

  

  return(
    <div>
       {/* <Counter/>
       <NameDisplay name="Hepsi" Ongreet={greet}/> */}
       {/* <BgColor/> */}
       {/* <DropDown /> */}
       {/* <Card>
       <h2>Hello World 👋</h2>
      <p>This is inside the card!</p>
      </Card> */}
      {/* <ToDo /> */}
      {/* <FruitItem  lists= {FruitLists}/> */}
      {/* <AscDec /> */}
      {/* <TopHighest /> */}
      {/* <ListbyCategory /> */}
      {/* <AllRouting /> */}
      {/* <DatePicker /> */}
      {/* <CountDown /> */}
      {/* <DaysUntilNewYear /> */}
      <DigitalClock />

    </div>
  )
}


export default App;