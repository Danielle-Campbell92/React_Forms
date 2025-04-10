import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {
const [token, setToken] = useState(null)

  return (
    <>
    <div className='app-container'>
    <h1>Authentication App</h1>
  <Authenticate token={token}/>
  <SignUpForm setToken={setToken}/>
   </div> 
   </>
  )
}

export default App
