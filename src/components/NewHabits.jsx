import { useState } from "react"

export function NewHabits(props) {


    let addOneToStreak = (index) => {


        props.updatehabit(index)
    }

    return <div>



        <h3>new habits</h3>
        <input type="text" placeholder="Title" id="habit" />
        <input type="number" placeholder="streaks" id="startstreaks" />
        <button onClick={() => {


            let inputhabit = document.getElementById("habit").value
            let inputstreaks = parseInt(document.getElementById("startstreaks").value)
            if (!inputhabit == "" && !inputstreaks == "") {
                let newhabit = {
                    Title: inputhabit,
                    streak: inputstreaks
                }
                console.log(newhabit);
                props.addhabits(newhabit)
            }
            else {
                alert("You most write something in the title and add number on streaks");
            }


            

        }}>add habit</button>
        <div className="Container">


            {props.habits && props.habits.map((habit, index) => {
                return <div className="item" key={index} id={index} onClick={() => addOneToStreak(index)}><p >{habit.Title}</p>
                    <p>Streaks: {habit.streak}</p>

                    <div className="procolactor"></div>
                   

                    <select  id={"Prioritet "+ index} onChange={()=>props.rankingHighToLow()}> 
                        <option value={"heigest" }>heigest</option>
                        <option value={"medium" } >medium</option>
                        <option value={"low" } >low</option>
                    </select>
                </div>
               
            })}
        </div>

    </div>
}