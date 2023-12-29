import { useState } from "react";
import { NewHabits } from "./NewHabits";

export function Habits(props) {
  let [changer, setchanger] = useState("adduktion");
  let addOneToStreak = (index) => {
    updatehabit(index);
  };
  let [habits, setHabits] = useState([
    // here is the save habits and transport it
    {title:"kaka",streak: 1, Priority: {name:"Low", number: 1}}
  ]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


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
    // here will sort habits
    let sortingStreakSelector = document.getElementById(
      "sortingStreakSelector"
    ).value;
    let sortingPrioritySelector = document.getElementById(
      "sortingPrioritySelector"
    ).value;
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
      <label>add remove or make streaks to zero </label>
     <button id="adduktion" onClick={() => setchanger("adduktion")}>+1</button>
      <button onClick={() => setchanger("Zero")}>0</button>
      <button onClick={() => setchanger("subtraction")}>-1</button>
      {/* Here can user sort Priority habits by high and low*/}
      <p>{changer}</p>

      <label for="sortingPrioritySelector">Priority rank</label>
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
      {/* Here can user sort habits by high and low*/}
      <label for="sortingStreakSelector">streak rank</label>

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
      <label for="filter">filter Priority</label>
      <select
        name=""
        id="filter"
        onChange={() => {
          let rankStreakHabits = [...habits];
          handleRankingSystem(rankStreakHabits);
        }}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>

        <option value="Low">Low</option>
      </select>
      <label for="checkboxfilter">trigger filter habits</label>
      <input
        type="checkbox"
        id="checkboxfilter"
        onChange={() => {
          let rankStreakHabits = [...habits];
          handleRankingSystem(rankStreakHabits);
          setIsCheckboxChecked(!isCheckboxChecked);
        }}
      />
   

      <NewHabits
        updatehabit={updatehabit}
        addhabits={addhabits}
        isCheckboxChecked={isCheckboxChecked}
      />
      <div className="Container">
        {habits && isCheckboxChecked
          ? habits
              .filter((filteredItem) => {
                // Add your filtering condition here
                return (
                  filteredItem.Priority.name ===
                  document.getElementById("filter").value
                );
              })
              .map((filteredItem, index) => (

                <div key={index} className="item" onClick={() => addOneToStreak(index)}>
                 
                  <p>Name: {filteredItem && filteredItem.title}</p>
                  <p>Streaks: {filteredItem && filteredItem.streak}</p>
                  <p>Priority: {filteredItem && filteredItem.Priority.name}</p>
                </div>
              ))
          : habits.map((filteredItem, index) => (
              <div key={index} className="item" onClick={() => addOneToStreak(index)}>
                <p>Habits: {filteredItem && filteredItem.title}</p>
                <p>Streaks: {filteredItem && filteredItem.streak}</p>
                <p>Priority: {filteredItem && filteredItem.Priority.name}</p>
              </div>
            ))}
      </div>
    </>
  );
}
