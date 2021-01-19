import React, { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy milk", day: "Feb 5th at 2:30pm", reminder: true },
    { id: 2, text: "Buy bread", day: "Feb 15th at 12:30pm", reminder: true },
    { id: 3, text: "Buy eggs", day: "Feb 25th at 5:30pm", reminder: false },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show my Friend"
      )}
    </div>
  );
}

export default App;
