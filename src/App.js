// src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ priority: 'All', status: 'All' });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <Filter setFilter={setFilter} />
      <Dashboard
        tasks={tasks}
        filter={filter}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

