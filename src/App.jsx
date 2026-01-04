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

const Home = () => {
  return <>
      <div id="home-view">
        <div>
          <StarBackground></StarBackground>
          <Navbar></Navbar>
          <br></br><br></br>
          <Title></Title>
        </div>
        <br></br><br></br><br></br>
        <Dictionary></Dictionary>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <div>
          <div>
            <h1 class="section">
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Experiences
              </span>
            </h1>
            <br></br>
            <div id="experiences-view">
              <Experiences data={experiencesData}></Experiences>
            </div>
          </div>
          <br></br><br></br>
          <br></br><br></br>
          <div>
            <h1 class="section">
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Projects
              </span>
            </h1>
            <br></br>
            <div id="projects-view">
              <Projects data={projectsData}></Projects>
            </div>
          </div>
          <br></br><br></br>
          <br></br><br></br>
          <div>
            <h1 class="section">
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
                Contact Me
              </span>
            </h1>
            <br></br>
            <div id="contact-view">

            </div>
          </div>
        </div>
        <br></br>
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
