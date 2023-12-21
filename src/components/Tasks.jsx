import React, { useState, useEffect } from "react";
import './Tasks.css'
export function Tasks(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimate, setEstimate] = useState(0);
  const [type, setType] = useState("hushållssysslor");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [suggestedActivity, setSuggestedActivity] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
   
    const mockTasks = [
      { id: 1, title: "Gå ut med soporna", description: "...", estimate: 30, type: "hushållssysslor" },
     
    ];

    setTasks(mockTasks);
  };

  const addTask = () => {
    if (!title || !description || estimate <= 0) {
      alert("Fyll i alla fält.");
      return;
    }

    const newTask = { title, description, estimate, type };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEstimate(0);
    setType("hushållssysslor");
  };

  const suggestActivity = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const data = await response.json();
      const activity = data.activity;
      setSuggestedActivity(activity);
      setTitle(activity);
    } catch (error) {
      console.error("Error fetching suggested activity:", error);
    }
  };

  const completeTask = (taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setTitle(taskToEdit.title);
    setDescription(taskToEdit.description);
    setEstimate(taskToEdit.estimate);
    setType(taskToEdit.type);
    removeTask(taskId);
  };

  return (
    <div>
      <h1>Ärenden</h1>
      <div>
        <label>Titel:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Beskrivning:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Tidsestimat (min):</label>
        <input type="number" value={estimate} onChange={(e) => setEstimate(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Typ av ärende:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="hushållssysslor">Hushållssysslor</option>
          <option value="aktivitetMedVänner">Aktivitet med vänner</option>
          <option value="jobbrelaterad">Jobbrelaterad</option>
        </select>
      </div>
      <button onClick={addTask}>Lägg till ärende</button>
      <button onClick={suggestActivity}>Få förslag på aktivitet</button>
      <h2>Förslag på aktivitet: {suggestedActivity}</h2>
      <h2>Att göra:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.estimate} min) - {task.type}{" "}
            <button onClick={() => completeTask(task.id)}>Markera som slutfört</button>
            <button onClick={() => removeTask(task.id)}>Ta bort</button>
            <button onClick={() => editTask(task.id)}>Redigera</button>
          </li>
        ))}
      </ul>
      <h2>Slutförda ärenden:</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;