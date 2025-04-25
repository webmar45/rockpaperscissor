import { useState } from 'react'
import './App.css'

function App() {
    const choices = ['Rock', 'Paper', 'Scissor']
    const [player, setPlayer] = useState("")
    const [computer, setComputer] = useState("")
    const [result, setResult] = useState("")
    const [chances,setChances]= useState(0)
    const playGame = (playerChoice) => {
        const compChoice = choices[Math.floor(Math.random() * 3)]
        setPlayer(playerChoice)
        setComputer(compChoice)

        if (playerChoice === compChoice) setResult("It's a draw");
        else if ((playerChoice === "Rock" && compChoice === "Scissor") ||
            (playerChoice === "Paper" && compChoice === "Rock") ||
            (playerChoice === "Scissor" && compChoice === "Paper"))
            setResult("You Win")
        else
            setResult("You Lose")
        setChances(chances+1)
    };
    return(
        <div>
            <h2>Rock Paper Scissor</h2>
            {chances<3?choices.map((choice)=>(
                <button key={choice} onClick={()=>playGame(choice)}>{choice}</button>
            )):"No more Chances"}
            <p>You:{player}|Computer:{computer}</p>
            <p>{result}</p>
        </div>
    )
}

export default App
