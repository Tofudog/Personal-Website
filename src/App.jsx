import './App.css'
import topBackground from './assets/top-background.gif'

const DescribeAmazon = () => {
  return <>
    <div>
      <p>Here is what I did</p>
    </div>
  </>
};

const GenerateExperiences = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold"><DescribeAmazon></DescribeAmazon></div>
        <div className="collapse-content text-sm"></div>
      </div>
      <br></br>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
      </div>
      <br></br>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">How do I update my profile information?</div>
        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
      </div>
    </div>
  );
};

function App() {

  return (
    <>
      <div>
        <h1 class="title">
          Leonardo de Farias
        </h1>
        <br></br>
        <h2 class="subtitle">
          CS Student @ Emory, Aspiring Front End Developer
        </h2>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <h1 class="section">
          <span class="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via gray-300 to-gray-500">
            Experiences
          </span>
        </h1>
        <br></br>
        <GenerateExperiences></GenerateExperiences>
      </div>
    </>
  )
}

export default App
