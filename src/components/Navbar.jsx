import React, { useState } from 'react'

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [navOverlay, setNavOverlay] = useState(false);

  const flipOverlay = () => {
      if (navOverlay) {
          setNavOverlay(false);
      }
      else {
          setNavOverlay(true);
      }
  };

  return (
    <div>
      <div>
        {navOverlay && (
            <div id="navbar-overlay">
                <a className="closebtn" onClick={flipOverlay}>&times;</a>
                <div id="navbar-overlay-child">
                  <a onClick={() => scrollToSection("home-view")}>home</a>
                </div>
                <div id="navbar-overlay-child">
                  <a onClick={() => scrollToSection("experiences-view")}>experiences</a>
                </div>
                <div id="navbar-overlay-child">
                  <a onClick={() => scrollToSection("projects-view")}>projects</a>
                </div>
                <div id="navbar-overlay-child">
                  <a onClick={() => scrollToSection("contact-view")}>contact</a>
                </div>
            </div>
        )}
      </div>
      <div className="w-full py-4">
        <div className="absolute left-10">
          <div className="flex items-center gap-3">
            <button id="navbar-button" onClick={flipOverlay}>
              <div>
                <h1>=</h1>
              </div>
            </button>
            <h1 className="text-xl font-bold">לאו_</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="hidden lg:flex gap-10">
            <div className="navbar-section">
              <p>001</p>
              <a onClick={() => scrollToSection("home-view")}>// home</a>
            </div>
            <div className="navbar-section">
              <p>010</p>
              <a onClick={() => scrollToSection("experiences-view")}>// experiences</a>
            </div>
            <div className="navbar-section">
              <p>011</p>
              <a onClick={() => scrollToSection("projects-view")}>// projects</a>
            </div>
            <div className="navbar-section">
              <p>100</p>
              <a onClick={() => scrollToSection("contact-view")}>// contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;