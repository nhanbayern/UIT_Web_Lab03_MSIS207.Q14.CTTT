import TodoItem from "./TodoItem.jsx";

export default function TodoColumn({
  title,
  status,
  tasks,
  moveTask,
  deleteTask,
}) {
  const nextStatus =
    status === "todo"
      ? "in-progress"
      : status === "in-progress"
      ? "done"
      : "todo";

  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          moveTask={moveTask}
          deleteTask={deleteTask}
          nextStatus={nextStatus}
        />
      ))}
    </div>
  );
}
