import TodoColumn from "./TodoColumn.jsx";
import { useState } from "react";

export default function TodoBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", status: "todo" },
    { id: 2, text: "Build project", status: "in-progress" },
    { id: 3, text: "Style UI", status: "done" },
  ]);

  const [text, setText] = useState("");

  function addTask(newText) {
    if (!newText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newText,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  }

  function moveTask(id, nextStatus) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: nextStatus } : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  const columns = [
    { key: "todo", title: "Todo" },
    { key: "in-progress", title: "In Progress" },
    { key: "done", title: "Done" },
  ];

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="kanban-board">
        {columns.map((col) => (
          <TodoColumn
            key={col.key}
            title={col.title}
            status={col.key}
            tasks={tasks.filter((t) => t.status === col.key)}
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
