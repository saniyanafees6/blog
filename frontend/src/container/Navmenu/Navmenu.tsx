import React from "react";

import "./Navmenu.scss";
import { images } from "../../constants";

const Navmenu = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "blogs", "categories", "about", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={item}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
