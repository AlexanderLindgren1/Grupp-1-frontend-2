import { useState } from "react";
import { NewHabits } from "./NewHabits";

export function Habits(props) {
  let [changer, setchanger] = useState("adduktion");
  let [sortingOption, setSortingOption] = useState("none");
  let [habits, sethabits] = useState([
    { Title: "kaka", streak: 4 },
    { Title: "Lama", streak: 8 },
  ]);

  function addhabits(objects) {
    let updatedHabits = [...habits];
    updatedHabits.push(objects);
    sethabits(updatedHabits);
  }

  let updatehabit = (index) => {
    let updatedHabits = [...habits];

    if (changer === "adduktion") {
      updatedHabits[index].streak += 1;
    } else if (changer === "Zero") {
      updatedHabits[index].streak = 0;
    } else if (changer === "subtraction") {
      updatedHabits[index].streak -= 1;
    }

    sethabits(updatedHabits);
  };

  let handleSortingChange = (event) => {
    setSortingOption(event.target.value);
    if (event.target.value === "highest") {
      rankingHighToLow();
    } else if (event.target.value === "lowest") {
      rankingLowToHigh();
    }
  };

  let rankingHighToLow = () => {
    let sortedHabits = [...habits];
    sortedHabits.sort((a, b) => b.streak - a.streak);
    sethabits(sortedHabits);
  };

  let rankingLowToHigh = () => {
    let sortedHabits = [...habits];
    sortedHabits.sort((a, b) => a.streak - b.streak);
    sethabits(sortedHabits);
  };

  return (
    <>
      <h1>Habits</h1>
      <button onClick={() => setchanger("adduktion")}>+1</button>
      <button onClick={() => setchanger("Zero")}>0</button>
      <button onClick={() => setchanger("subtraction")}>-1</button>

      <select name="sorting" id="sorting" onChange={handleSortingChange}>
        <option value="none">none</option>
        <option value="highest">highest to lowest</option>
        <option value="lowest">lowest to highest</option>
      </select>

      <p>{changer}</p>

      <NewHabits habits={habits} updatehabit={updatehabit} addhabits={addhabits} />
    </>
  );
}