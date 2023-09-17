import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <p>
          <span className="main-logo">E-Learn</span>
        </p>
      </div>
      <div className={!isToggled ? `nav-mid` : `nav-hide`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="nav-right">
        <button className="nab-btn">Get the App</button>
      </div>
      <div className="menu">
        {!isToggled ? (
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => setIsToggled(!isToggled)}
          />
        ) : (
          <GrClose
            className="menu-icon"
            onClick={() => setIsToggled(!isToggled)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
