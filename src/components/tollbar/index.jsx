import React from "react";
import "./tollbar.css";

function Tollbar() {
  return (
    <div className="tollbar">
      <ul className="tollbar__list">
        <li className="tollbar__item">
          <a href="#" className="tollbar__link tollbar__link--home">
            <span className="tollbar__text">Home</span>
          </a>
        </li>
        <li className="tollbar__item">
          <a href="#" className="tollbar__link tollbar__link--search">
            <span className="tollbar__text">Search</span>
          </a>
        </li>
        <li className="tollbar__item">
          <a href="#" className="tollbar__link tollbar__link--settings">
            <span className="tollbar__text">Settings</span>
          </a>
        </li>
        <li className="tollbar__item">
          <a href="#" className="tollbar__link tollbar__link--favorite">
            <span className="tollbar__text">Favorite</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tollbar;
