// src/components/Filter.js
import React from 'react';

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <select name="priority" onChange={handleFilterChange}>
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select name="status" onChange={handleFilterChange}>
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
