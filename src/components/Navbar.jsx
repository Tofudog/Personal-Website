import React, { useState } from 'react'

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <div className="w-full py-4">
      <div className="absolute left-10">
        <div className="flex items-center gap-3">
          <button id="navbar-button" onClick={() => {scrollToSection("experiences-view")}}>
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
            <a>// projects</a>
          </div>
          <div className="navbar-section">
            <p>100</p>
            <a>// contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;