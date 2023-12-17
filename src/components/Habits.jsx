import { useState } from "react"




export function Habits(props) {
    // Ni ska visa ut samtliga habits användaren har, samt streak för varje habit.
    let [streakValue, setStreakstreakValue] = useState(5)

    let getinput = document.querySelector("input")

    let habits = [{
        streakValue: 5,


    }]
    return <div className="container">

        
  <div className="item"></div>

    </div>




}

