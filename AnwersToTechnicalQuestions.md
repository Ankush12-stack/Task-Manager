# Answers to Technical Questions

### 1. How long did you spend on the coding test?

I spent approximately 2-3 hours on the coding test. This time was divided between setting up the React project, implementing core functionality (task management, localStorage, filtering), adding styling, and writing the animations and UI integration examples.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The most useful feature in recent versions of JavaScript (ECMAScript) is the addition of **optional chaining (`?.`)**, which allows for safely accessing deeply nested properties without having to manually check if each reference in the chain is valid.

Example of usage in the project:

```js
// src/components/Task.js

function Task({ task }) {
  return (
    <div className={`task ${task?.completed ? 'completed' : ''}`}>
      <h3>{task?.title || 'Untitled Task'}</h3>
      <p>{task?.description}</p>
      <p>Due: {task?.dueDate || 'No Due Date'}</p>
      <p>Priority: {task?.priority || 'Medium'}</p>
    </div>
  );
}


### 3. How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would:

Monitor logs: Check server and client-side logs for any errors or warnings that could point to the problem.
Browser Developer Tools: Use Chrome DevTools (or equivalent) to check for excessive re-renders, memory leaks, and network bottlenecks by analyzing performance traces.

### 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would consider adding the following features:

Task Sorting: Allow users to sort tasks by due date, priority, or creation date.
Notifications: Implement a feature to set reminders for upcoming or overdue tasks using the browser's notification API or third-party services.
Task Categories/Labels: Add the ability to group tasks by categories or labels (e.g., work, personal).
```
