import { useState } from "react"

export function NewHabits(props) {
    let [movehabit, setmovehabit] = useState()


       let list = []


    function submit() {

        const title = document.getElementById("title").value
        const streak = document.getElementById("streak").value

        let object = {
            title: title,
            givenumber: streak
        }
 
        list.push(object)
        




    }


    return <><input type="text" id="title" /> <input type="number" id="streak" /> <button onClick={() => submit()}>submit</button>

        {/* <br />
        <ul>  {list.length > 0 && list.map((habit) => { console.log(habit); return <li> {habit.title} </li> })} </ul> */}
    </>

}