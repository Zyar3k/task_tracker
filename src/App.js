import React, { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy milk", day: "Feb 5th at 2:30pm", reminder: true },
    { id: 2, text: "Buy bread", day: "Feb 15th at 12:30pm", reminder: true },
    { id: 3, text: "Buy eggs", day: "Feb 25th at 5:30pm", reminder: true },
  ]);
  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
