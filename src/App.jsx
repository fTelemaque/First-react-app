import './App.css'
import profilePicture from './assets/blank-profile.png'

function App() {
  return (
    <> 
      <div id='wrapper'>
        <img src={profilePicture} alt="" />
        <h1>Fokly Telemaque</h1>
        <h2>Software Engineer</h2>
        <div className='aboutandcontact'>
          <h3>About me</h3>
          <hr/>
          <p>I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application</p>
        </div>
        <div className='aboutandcontact'>
          <h3>Contact me</h3>
          <hr />
          <p>Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/</p>
        </div>

      </div>
    </>
  )
   
}

export default App;
