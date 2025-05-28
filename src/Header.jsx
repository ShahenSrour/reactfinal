import "./App.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="nav__left">
            <figure>
              <img className="nav__logo" src="assets/download.gif" alt="" />
            </figure>
            <h1>Java Search</h1>
          </div>
          <div className="nav__right">
            <label className="search_label" htmlFor="search">
              Search
            </label>
            <input
              id="search"
              type="text"
              onChange="OnSearchChange(event)"
              placeholder="category"
            />
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
}

export default Header;
