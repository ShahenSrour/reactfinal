import React, { useState } from "react";
import book from "./assets/download.gif";
import Results from "./Results.jsx";

function Header() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav__left">
            <figure>
              <img className="nav__logo" src={book} alt="Logo" />
            </figure>
            <h1>Java Search</h1>
          </div>
          <div className="nav__right">
            <label className="search_label" htmlFor="search">
              Search
            </label>
            <select
              id="search"
              onChange={(e) => handleSearchChange(e.target.value)}
            >
              <option value="">Select a Category</option>
              <option value="smileys-and-people">Smileys</option>
              <option value="animals-and-nature">Animals</option>
              <option value="food-and-drink">Food</option>
              <option value="travel-and-places">Travel</option>
              <option value="activities">Activities</option>
              <option value="objects">Objects</option>
              <option value="symbols">Symbols</option>
              <option value="flags">Flags</option>
            </select>
            <button className="Submit">
              <a href="#results">
                <span className="white">Submit</span>
              </a>
            </button>
          </div>
        </nav>
      </header>

      {selectedCategory ? <Results cat={selectedCategory} /> : null}
    </>
  );
}

export default Header;
