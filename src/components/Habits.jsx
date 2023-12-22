import { useState } from "react";

import { NewHabits } from "./NewHabits";

export function Habits(props) {
  let [changer, setchanger] = useState("adduktion");

  let [habits, sethabits] = useState([
    { Title: "kaka", streak: 4 },
    { Title: "Lama", streak: 8 },
  ]);

  function addhabits(objects) {
    let upppdatedHabits = [...habits];
    console.log(upppdatedHabits);
    upppdatedHabits.push(objects);
    sethabits(upppdatedHabits);
  }
  let updatehabit = (index) => {

    
    let updatehabits = [...habits];

    if (changer == "adduktion") {
      updatehabits[index].streak += 1;
    } else if (changer == "Zero") {
      updatehabits[index].streak = 0;
    } else if (changer == "subtraction") {
      updatehabits[index].streak -= 1;
    }

    sethabits(updatehabits);
  };

  let rankingHighToLow = (index) => {
  console.log("kaka");
    habits.sort((a, b) => {
        console.log(habits);
      return b["streak"] - a["streak"];

    });
  };

  return (
    <>
      <h1>Habits</h1>
      <button onClick={() => setchanger("adduktion")}>+1</button>
      <button onClick={() => setchanger("Zero")}>0</button>

      <button onClick={() => setchanger("subtraction")}>-1</button>

      <select name="" id="">
        <option value="">none</option>
        <option value="">highest</option>
        <option value="">lowest</option>
      </select>
      <p>{changer}</p>

      <NewHabits
        habits={habits}
        updatehabit={updatehabit}
        addhabits={addhabits}
        // rankingHighToLow={rankingHighToLow}
      />
    </>
  );
}
