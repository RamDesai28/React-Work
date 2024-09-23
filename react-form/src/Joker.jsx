import { useState } from "react"

export default function Joker(){

    let [joke,setJoke]=useState({})


    let URL="https://official-joke-api.appspot.com/random_joke"

    let getNewJoke=async()=>{
        let respone=await fetch(URL)
        let jsonResponse=await respone.json()
        console.log(jsonResponse)
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline})
    }
    return(
        <div>
            <h3>Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}