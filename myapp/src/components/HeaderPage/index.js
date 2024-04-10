import React from "react";

import "./index.css";

import "./index.css";

function HeaderPage() {
  return (
    <div>
      <header className="bg-container">
        <h1 className="MoviesDb">
        <a className="TopRAtedLink" href="/">MovieDb</a>
          </h1>
        <div>
          <ul className="UnOrderedList">
            <li className="Popula">
            <a className="TopRAtedLink" href="/">Popular</a>
            </li>

            <li className="Popula">
              <a className="TopRAtedLink" href="./toprated">Top Rated</a>
            </li>

            <li className="Popula">
            <a className="TopRAtedLink" href="./UpComing">UpComing</a>
            </li>
            <div className="inputSearch">
              <input className="InputButton" type="search" />
              <a href="./searchIndex">
              <button className="Button-search" type="button">
                search
              </button>
              </a>
              
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
