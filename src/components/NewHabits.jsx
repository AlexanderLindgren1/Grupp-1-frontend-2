import { useState } from "react"

export function NewHabits(props) {

    let [master, setmaster] = useState([])

    let clonemaster = [...master]

    function submit(params) {
        const title = document.getElementById("title").value
        const streaks = document.getElementById("streaks").value
        let object = {
            title: title,
            streaks: streaks
        }


        clonemaster.push(object)

        console.log(clonemaster);
        setmaster(clonemaster)
        master.map((tt) => { console.log(tt); })


    }

    let ranking = () => {

    }


    return (
        <>
           <input type="text" id="title" />
            <input type="number" id="streaks" />
            <button onClick={() => submit()}>submit</button>

            {master.map((tt, index) => { return <><p key={index}>title: {tt.title} streaks: {tt.streaks} </p> 
          
            <input type="radio" id="low" value={"low"} name="Prioritet " />
            <label for="low">low</label>

            <input type="radio" id="medium" value={"medium"} name="Prioritet " />
            <label for="medium">medium</label>

            <input type="radio" id="heigest" value={"heigest"} name="Prioritet " />
            <label for="heigest">heigest</label>
        </>
        })}


        </>)

}