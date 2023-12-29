import { useState } from "react";
import './Habits.css';
export function NewHabits(props) {




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
          if (props.isCheckboxChecked) {
            alert("You can´t use filter same time as adding habit!")
          }
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
     
    </div>
  );
}
