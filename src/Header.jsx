import book from "./assets/download.gif";
import Results from "./Results.jsx";
function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="nav__left">
            <figure>
              <img className="nav__logo" src={book} alt="" />
            </figure>
            <h1>Java Search</h1>
          </div>
          <div className="nav__right">
            <label className="search_label" htmlFor="search">
              Search
            </label>
            <select
              id="search"
              onChange={(e) => OnSearchChange(e.target.value)} // Pass selected value
            >
              <option value="smileys-and-people">Smileys</option>
              <option value="animals-and-nature">Animals</option>
              <option value="food-and-drink">Food</option>
              <option value="food-and-drink">Food</option>
              <option value="travel-and-place">Travel</option>
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
    </>
  );
  function OnSearchChange(event) {
    let cat = event;
    if (
      cat == "smileys-and-people" ||
      cat == "animals-and-nature" ||
      cat == "food-and-drink" ||
      cat == "travel-and-place" ||
      cat == "activities" ||
      cat == "objects" ||
      cat == "symbols" ||
      cat == "flags"
    ) {
      return <Results category={cat} />;
    } else {
      console.log("error, no valid search results");
      alert("error, no valid search results");
      return null;
    }
  }
}

export default Header;
