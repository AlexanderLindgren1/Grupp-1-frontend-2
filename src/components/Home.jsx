
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Habits } from './Habits';
import { Friends } from './Friends';
import { Tasks } from './Tasks';

const Home = () => {
    const topPrioritizedHabits = [
            { id: 1, title: 'Exercise', priority: 'high' },
            { id: 2, title: 'Reading', priority: 'medium' },
            { id: 3, title: 'Meditation', priority: 'high' },
        ];

        const latestTasks = [
            { id: 1, title: 'Grocery shopping', createdAt: new Date() },
            { id: 2, title: 'Finish project', createdAt: new Date() },
            { id: 3, title: 'Call friend', createdAt: new Date() },
        ];

        const latestFriends = [
            { id: 1, name: 'John Doe', createdAt: new Date() },
            { id: 2, name: 'Jane Doe', createdAt: new Date() },
            { id: 3, name: 'Bob Smith', createdAt: new Date() },
            { id: 4, name: 'Alice Johnson', createdAt: new Date() },
            { id: 5, name: 'Charlie Brown', createdAt: new Date() },
    ];

    return (<> 
    <Link to={"/Habits"}>kaka:)</Link>

    <div>
            <h1>Top 3 Prioritized Habits</h1>
            <ul>
                {topPrioritizedHabits.map((habit) => (
                    <li key={habit.id}>{habit.title} - Priority: {habit.priority}</li>
                ))}
            </ul>
            <Link to="/Habits">Se fler</Link>

            <h1>Latest 3 Tasks</h1>
            <ul>
                {latestTasks.map((task) => (
                    <li key={task.id}>{task.title} - Created at: {task.createdAt.toLocaleString()}</li>
                ))}
            </ul>
            <Link to="/Tasks">Se fler</Link>

            <h1>Latest 5 Friends</h1>
            <ul>
                {latestFriends.map((friend) => (
                    <li key={friend.id}>{friend.name} - Added at: {friend.createdAt.toLocaleString()}</li>
                ))}
            </ul>
        </div>
        <Friends/>
    </>

        
    );
};

export default Home;
