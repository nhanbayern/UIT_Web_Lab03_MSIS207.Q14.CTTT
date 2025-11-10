import { useState } from "react";
import TodoBoard from "./TodoBoard.jsx";
let nextId = 1;
export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", status: "todo" },
    { id: 2, text: "Build project", status: "in-progress" },
    { id: 3, text: "Style the UI", status: "done" },
  ]);

  function addTask(text) {
    if (!text.trim()) return;
    const newId = ++nextId;
    setTasks([
      ...tasks,
      { id: Date.now(), shortId: `#${newId}`, text, status: "todo" },
    ]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function moveTask(id, newStatus) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  }

  return (
    <div className="todo-container">
      <h2 className="todo-header">My Kanban Board</h2>
      <TodoBoard
        tasks={tasks}
        addTask={addTask}
        moveTask={moveTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
