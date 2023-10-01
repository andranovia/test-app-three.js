import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logoImage from '../../img/logoHome.PNG';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };
  return (

    <div className="n-wrapper" id="Navbar">

      <div className="n-left">
        <div className="n-name"> <img src={logoImage} alt="JavaScript Logo" style={{ width: '80px', height: '60px', marginBottom: '-18px'}} />Vaesc</div>

      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li
              onMouseEnter={() => handleItemHover(0)}
              onMouseLeave={() => handleItemHover(null)}
              className={hoveredItem === 0 ? "hovered" : ""}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            
            </li>
            <li
            onMouseEnter={() => handleItemHover(0)}
            onMouseLeave={() => handleItemHover(null)}
            className={hoveredItem === 0 ? "hovered" : ""}>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li
            onMouseEnter={() => handleItemHover(0)}
            onMouseLeave={() => handleItemHover(null)}
            className={hoveredItem === 0 ? "hovered" : ""}>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li
            onMouseEnter={() => handleItemHover(0)}
            onMouseLeave={() => handleItemHover(null)}
            className={hoveredItem === 0 ? "hovered" : ""}>
              <Link to="portfolio"  smooth={true}>
                Services
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;