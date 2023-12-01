import React, { useState } from "react";
import { foods } from "./data";
import './style.css';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const foodsData = foods;

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredFood = foodsData.filter((food) => 
    food.name.toLowerCase().includes(searchText.toLowerCase())
   );

  function getHighlightedText(text, higlight) {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }
  // const Compo = ({ higlight, value }) => {
  //   return <p>{getHighlightedText(value, higlight)}</p>;
  // };

  return (
    <>
    <h1>Search Food</h1>
    <div className="App">
      <input
        type="text"
        placeholder="Search food by name"
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredFood.map((food) => (
          <li key={food.id}>
            <h3>{getHighlightedText(food.name, searchText)}</h3>
            <p>{getHighlightedText(food.description, searchText)}</p>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}