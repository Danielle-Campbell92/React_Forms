import { useState } from "react"

 function Authenticate({token}){
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    const [username, setUsername] = useState(null)

    async function handleClick(){
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const result = await response.json()
            console.log(result)
            if(result.message){
            setSuccessMessage(result.message)}
            if(result.data && result.data.username){
                setUsername(result.data.username)
            }
        
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <>
        <div>
        <h2>Authenticate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
        </div>
        </>
    )
}
export default Authenticate