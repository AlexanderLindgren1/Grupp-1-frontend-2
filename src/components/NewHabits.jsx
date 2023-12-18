export function NewHabits(props) {
    let list = []




    function submit() {
        
        const title = document.getElementById("title").value
        const streak = document.getElementById("streak").value

        let object = {
            title: { title },
            givenumber: streak,
        }


       return list.push(object)

  

    }


    console.log(list);
    return <><input type="text" id="title" /> <input type="number" id="streak" /> <button onClick={() =>  submit() }>submit</button>
    
    <br />
    <ul>  {list && list.map((habit) =>{console.log(habit); return <li> {habit.title} </li>})} </ul>
    </>

}