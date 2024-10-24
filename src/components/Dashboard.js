// src/components/Dashboard.js
import React from 'react';
import Task from './Task';

function Dashboard({ tasks, filter, editTask, deleteTask }) {
  const today = new Date().toISOString().split('T')[0];

  const filteredTasks = tasks.filter((task) => {
    if (filter.priority !== 'All' && task.priority !== filter.priority) {
      return false;
    }
    if (filter.status === 'Completed' && !task.completed) {
      return false;
    }
    if (filter.status === 'Pending' && task.completed) {
      return false;
    }
    return true;
  });

  const upcomingTasks = filteredTasks.filter((task) => task.dueDate > today && !task.completed);
  const overdueTasks = filteredTasks.filter((task) => task.dueDate < today && !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      {upcomingTasks.map((task) => (
        <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
      ))}
      <h2>Overdue Tasks</h2>
      {overdueTasks.map((task) => (
        <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
      ))}
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default Dashboard;
