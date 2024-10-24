// src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import './styles.css';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ priority: 'All', status: 'All' });
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">
      <h1>Task Management App</h1>
       {/* Search Bar */}
       <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <TaskForm addTask={addTask} />
      <h2>Tasks</h2>
      <Filter setFilter={setFilter} />
      <Dashboard
        tasks={tasks}
        filter={filter}
        editTask={editTask}
        deleteTask={deleteTask}
      />
        {/* {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks found</p>
      )} */}
    </div>
  );
}

export default App;

