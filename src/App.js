import logo from './logo.svg';
import './App.css';
import './components/Habits.css';
import './components/Tasks';
import { NewHabits } from './components/NewHabits';

import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Habits } from './components/Habits';
import {Tasks} from './components/Tasks';
function App() {
  return (

    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Habits' element={<Habits />} />
        <Route path ='/Tasks' element={<Tasks />} />
      </Routes>    

    </div>
  );
}

export default App;
