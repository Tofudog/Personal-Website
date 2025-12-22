import './App.css';
import Experiences from './components/Experiences';
import Title from './components/Title';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <br></br>
        <div>
          <Title></Title>
        </div>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
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
    </>
  )
}

export default App
