import React from "react";

const tasks = [
  { id: 1, text: "Buy milk", day: "Feb 5th at 2:30pm", reminder: true },
  { id: 2, text: "Buy bread", day: "Feb 15th at 12:30pm", reminder: true },
  { id: 3, text: "Buy eggs", day: "Feb 25th at 5:30pm", reminder: true },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
