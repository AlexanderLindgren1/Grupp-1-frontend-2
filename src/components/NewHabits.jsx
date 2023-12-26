import { useState } from "react";

export function NewHabits(props) {
  let [moveData, setMoveData] = useState([{ name: "High", number: 3 }]);

  let addOneToStreak = (index) => {
    props.updatehabit(index);
  };

  return (
    <div>
      <h3>new habits</h3>
      <input type="text" placeholder="Title" id="habit" />
      <input type="number" placeholder="streaks" id="startstreaks" />
      <select name="" id="prioritizeHabit">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        onClick={() => {
          let inputhabit = document.getElementById("habit").value;
          let inputstreaks = parseInt(
            document.getElementById("startstreaks").value
          );

          let prioritizeHabit =
            document.getElementById("prioritizeHabit").value;

          let addNumberOnProtize = (x) => {
            let numberObject;
            if (x === "High") {
              numberObject = { name: x, number: 3 };
          
            } else if (x === "Medium") {
              numberObject = { name: x, number: 2 };
            } else if (x === "Low") {
              numberObject = { name: x, number: 1 };
            }
            return numberObject;
          };

          if (!inputhabit == "" && !inputstreaks == "") {
            let newhabit = {
              title: inputhabit,
              streak: inputstreaks,
              Priority: addNumberOnProtize(prioritizeHabit),
            };

            props.addhabits(newhabit);
          } else {
            alert(
              "You most write something in the title and add number on streaks"
            );
          }
        }}>
        add habit
      </button>
      <div className="Container">
        {props.habits &&
          props.habits.map((habit, index) => {
           
            return (
              <div
                className="item"
                key={index}
                id={index}
                onClick={() => addOneToStreak(index)}>
                <p>{habit.title}</p>
                <p>Streaks: {habit.streak}</p>
                <p> prioritized: {habit.Priority.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
