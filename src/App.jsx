import './App.css';
import { useState } from 'react';
import Experiences from './components/Experiences';
import Title from './components/Title';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import Dictionary from './components/Dictionary';
import experiencesData from "./data/experiences.json";

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
      </div>
    </>
  )
}

export default App
