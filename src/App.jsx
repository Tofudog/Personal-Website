import './App.css';
import Experiences from './components/Experiences';
import Title from './components/Title';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';

function App() {

  return (
    <>
      <div>
        <div>
          <StarBackground></StarBackground>
          <Navbar></Navbar>
          <Title></Title>
        </div>
        <br></br><br></br><br></br>
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
            <Experiences></Experiences>
          </div>
        </div>
        <br></br>
      </div>
    </>
  )
}

export default App
