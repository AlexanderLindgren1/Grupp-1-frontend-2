import { useState } from "react";
import { NewHabits } from "./NewHabits";

export function Habits(props) {
  let [changer, setchanger] = useState("adduktion");

  let [habits, setHabits] = useState([
    // here is the save habits and transport it
    { title: "test", streak: 11, Priority: { name: "High", number: 3 } },
  ]);

  function addhabits(objects) {
    let updatedHabits = [...habits];
    updatedHabits.push(objects);

    handleRankingSystem(updatedHabits);
  }

  let updatehabit = (index) => {
    // here will streaks changes in streaks
    let updatedHabits = [...habits];

    if (changer === "adduktion") {
      updatedHabits[index].streak += 1;
    } else if (changer === "Zero") {
      updatedHabits[index].streak = 0;
    } else if (changer === "subtraction") {
      updatedHabits[index].streak -= 1;
    }
    handleRankingSystem(updatedHabits);
  };

  let handleRankingSystem = (event) => {
    console.log("handle suff");
    // here will it filter and sort habits
    let sortingStreakSelector = document.getElementById(
      "sortingStreakSelector"
    ).value;
    let sortingPrioritySelector = document.getElementById(
      "sortingPrioritySelector"
    ).value;
    let checkboxfilter = document.getElementById("checkboxfilter");
      console.log(checkboxfilter.checked)
    let filter = document.getElementById("filter").value;
    //Filter prio
    if (checkboxfilter.checked) {
      if (filter == "FilterHigh") {
        console.log(filter+ " 1")
        event.filter((habit) => habit.Priority.name === "High");
      } else if (filter == "FilterLow") {
        console.log(filter + " 2");
        event.filter((habit) => habit.Priority.name === "Low");
        console.log(event);
      }
    }
    if (sortingStreakSelector === "highest") {
      event.sort((a, b) => b.streak - a.streak);
    } else if (sortingStreakSelector === "lowest") {
      event.sort((a, b) => a.streak - b.streak);
    }

    if (sortingPrioritySelector === "high") {
      event.sort((a, b) => b.Priority.number - a.Priority.number);
    } else if (sortingPrioritySelector === "low") {
      event.sort((a, b) => a.Priority.number - b.Priority.number);
    }
    return setHabits(event);
  };

  return (
    <>
      <h1>Habits</h1>
      {/* those buttons are made to change the the value of streaks as user wish */}
      <button onClick={() => setchanger("adduktion")}>+1</button>
      <button onClick={() => setchanger("Zero")}>0</button>
      <button onClick={() => setchanger("subtraction")}>-1</button>

      {/* Here can user sort habits by high and low*/}
      <select
        name="sorting"
        id="sortingStreakSelector"
        onChange={() => {
          let rankStreakHabits = [...habits];
          handleRankingSystem(rankStreakHabits);
        }}>
        <option value="none">none</option>
        <option value="highest">highest to lowest</option>

        <option value="lowest">lowest to highest</option>
      </select>
      {/* Here can user sort Priority habits by high and low*/}
      <select
        name="sorting"
        id="sortingPrioritySelector"
        onChange={() => {
          let rankPriorityHabits = [...habits];
          handleRankingSystem(rankPriorityHabits);
        }}>
        <option value="none">none</option>
        <option value="high">highest to lowest</option>

        <option value="low">lowest to highest</option>
      </select>
      <select
        name=""
        id="filter"
        onChange={() => {
          let rankPriorityHabits = [...habits];
          handleRankingSystem(rankPriorityHabits);
        }}>
        <option value="FilterHigh">High</option>
        <option value="FilterLow">Low</option>
      </select>
      <input
        type="checkbox"
        id="checkboxfilter"
        onChange={() => {
          let rankPriorityHabits = [...habits];
          handleRankingSystem(rankPriorityHabits);
        }}
      />
      <p>{changer}</p>

      <NewHabits
        habits={habits}
        updatehabit={updatehabit}
        addhabits={addhabits}
      />
    </>
  );
}
