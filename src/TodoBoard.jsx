import TodoColumn from "./TodoColumn.jsx";
import { useState } from "react";

export default function TodoBoard({ tasks, addTask, moveTask, deleteTask }) {
  const [text, setText] = useState("");

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
