import { useState } from "react"
 
import { NewHabits } from "./NewHabits"


export function Habits(props) {
    let [number, setNumber] = useState(0)
    let streak = 0
    function incress() {

        return setNumber(streak)

    }
    return <div className="container">

        <button onClick={() => setNumber(number+1)}>+</button>
        <button onClick={() => setNumber(0)}>0</button>
        <button onClick={() => setNumber(number-1)}>-</button>
        <br />
        {number ? <p>Streaks: {number}</p> : <p>how many streaks have you done?</p> }
        <NewHabits data={number} />
    </div>



}

