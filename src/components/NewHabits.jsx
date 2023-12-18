import { useState } from "react"

export function NewHabits(props) {

    let [habitList, setHabitList] = useState([])
    let [moveobject, setMoveObject] = useState()
    let index = 0

    let clonemaster = [...habitList]

    function addHabit(params) {
        const title = document.getElementById("title").value
        const streaks = document.getElementById("streaks").value


        console.log(props.data);
        let object = {
            title: title,
            streaks: props.data && props.data
        }

        clonemaster.push(object)
        setHabitList(clonemaster)
        console.log(habitList[0]);
        if (habitList[1]) {
            habitList[1].streaks = "Alexander"
        }




    }
 
    function clx(dxx, index) {
        console.log(index);
        return habitList[index].streaks = props.data



    }


    return (
        <div >
            <input type="text" id="title" />
            <input type="number" id="streaks" />
            <button onClick={() => addHabit()}>submit</button>
       

            {habitList.map((tt, index) => {
                return <div key={index} className="item"><p>title: {tt.title} streaks: {tt.streaks}  <button onClick={() => clx(tt, index)}>clx </button></p>

                    <input type="radio" id={"low" + index} value={"low"} name={"Prioritet "+ index} />
                    <label for={"low"+ index}>low</label>

                    <input type="radio" id={"medium"+ index} value={"medium"} name={"Prioritet "+ index} />
                    <label for={"medium"+ index}>medium</label>

                    <input type="radio" id={"heigest"+ index} value={"heigest" } name={"Prioritet "+ index} />
                    <label for={"heigest"+ index}>heigest</label>
                </div>
            })}


        </div>)

}