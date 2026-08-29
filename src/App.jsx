import './App.css';
import { useState } from 'react';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Title from './components/Title';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import Dictionary from './components/Dictionary';
import Bottom from './components/Bottom';
import experiencesData from "./data/experiences.json";
import projectsData from "./data/projects.json";
import Contact from './components/Contact';

const Home = () => {
  return <>
    <div id="root2">
      <div id="home-view">
        <div>
          <StarBackground></StarBackground>
          <Navbar></Navbar>
          <Title></Title>
        </div>
        <div className="section-block">
          <div id="experiences-view-scroll">
            <h1 className="section">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Experiences
              </span>
            </h1>
            <div id="experiences-view" className="section-spacer">
              <Experiences data={experiencesData}></Experiences>
            </div>
          </div>
          <div id="projects-view-scroll" className="section-block">
            <h1 className="section">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Projects
              </span>
            </h1>
            <div id="projects-view" className="section-spacer">
              <Projects data={projectsData}></Projects>
            </div>
          </div>
          <div id="contact-view-scroll" className="section-block">
            <h1 className="section">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Contact Me
              </span>
            </h1>
            <div id="contact-view" className="section-spacer">
              <Contact></Contact>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

function App() {
  return (
    <>
      <div>
        <Home></Home>
        <Bottom></Bottom>
      </div>
    </>
  )
}

export default App
