import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate";
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
];



const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);


  // Just another way to create a route, however react router (which we are not using is the best way)

  // const showAccordion = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items}/>
  //   }
  // }

  // const showList = () => {
  //   if (window.location.pathname === '/list') {
  //     return ;
  //   }
  // };

  // const showDropdownRoute = () => {
  //   if (window.location.pathname === '/dropdown') {
  //     return (
  //       <div>
  //         <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
  //         {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>: null}
  //       </div>
  //     )
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate /> ;
  //   }
  // }

  
  return (
    <div>
      <Route path ="/">
        <Accordion items={items} />
      </Route>
      <Route path ="/list">
        <Search />
      </Route>
      <Route path ="/dropdown">
        <div>
          <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
          {showDropdown ? <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected}/>: null}
        </div>
      </Route>
      <Route path ="/translate">
        <Translate />
      </Route>

    </div>
  );
};
export default App;
