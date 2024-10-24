// src/components/Task.js
import React from 'react';

function Task({ task, editTask, deleteTask }) {
  const handleComplete = () => {
    editTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={handleComplete}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
