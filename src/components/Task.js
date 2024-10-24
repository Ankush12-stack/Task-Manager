// src/components/Task.js
import React, { useState } from 'react';

function Task({ task, editTask, deleteTask }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleComplete = () => {
    editTask({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTask(task.id);
    }, 500); // Match the fadeOut duration
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''} ${isDeleting ? 'fade-out' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={handleComplete}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;

