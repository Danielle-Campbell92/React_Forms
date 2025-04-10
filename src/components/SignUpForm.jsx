import { useState } from "react"

function SignUpForm({setToken}){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)
const [successMessage, setSuccessMessage] = useState(null)

function validateForm(){
    if(username.length < 8){
        setError("Username must be at least 8 characters long")
    }
    if(password.length < 8){
        setError("Password must be at least 8 characters long")
    }
    setError(null)
}

async function handleSubmit(event){
    event.preventDefault();
    try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )
        const result = await response.json()
        console.log(result)
        setToken(result.token)
    }catch(error){
        console.log(error)
    }
}

    return(
    <>
    <h2>Sign Up!</h2>
    {
     error && <p>{error}</p>   
    }
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label> 
        <button>Submit!</button>
    </form>
    </>
    )
}
export default SignUpForm