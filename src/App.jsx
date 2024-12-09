import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReCAPTCHA from 'react-google-recaptcha'

function Header() {
  let title = "TODAYtodo"
  return <>
    <h1>{title}</h1>
  </>
}
function Description() {
  let description = "Explorer vos meilleures plantes ici"
  return description;
}

function Banner() {
  return <>
    <Header />
    <Description />
  </>
}

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [capVal, SetCapVal] = useState(null)

  function incrementAccount() {
    return (count + 1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
  }

  // site key : 6LckapQqAAAAAI2HwPVNmBx280z2A_qzQ3DM7VyM
  // secert key : 6LckapQqAAAAAGhEQfzK5qrpLJVOqk5ZzFK2FhHN
  return (
    <>
      <div>
        <h3>Subscribe</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <ReCAPTCHA
            sitekey="6LckapQqAAAAAI2HwPVNmBx280z2A_qzQ3DM7VyM"
            onChange={val => SetCapVal(val)}
          />
          <button disabled={!capVal}>Subscribe</button>
        </form>
      </div>
      <Banner className="banner-react"/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(incrementAccount())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
