import { useMemo } from "react";

export default function TodoItem({ task, moveTask, deleteTask, nextStatus }) {
  const statusLabel =
    nextStatus === "todo"
      ? "↩️ Back"
      : nextStatus === "in-progress"
      ? "➡️ Move"
      : "✅ Done";

  // 🎨 Hàm chọn màu pastel ngẫu nhiên
  const pastelColors = [
    "#FFECB3", // yellow
    "#FFE0B2", // orange
    "#C8E6C9", // green
    "#BBDEFB", // blue
    "#E1BEE7", // purple
    "#F8BBD0", // pink
    "#DCEDC8", // lime
    "#FFF9C4", // light yellow
    "#B2EBF2", // cyan
    "#D1C4E9", // lavender
  ];

  // Dùng useMemo để màu cố định theo task
  const bgColor = useMemo(() => {
    const index = Math.abs(task.id) % pastelColors.length;
    return pastelColors[index];
  }, [task.id]);

  return (
    <div className="task-card" style={{ backgroundColor: bgColor }}>
      <div className="task-info">
        <span className="task-id">{task.shortId}</span>
        <span className="task-text">{task.text}</span>
      </div>

      <div className="actions">
        <button
          className="move-btn"
          onClick={() => moveTask(task.id, nextStatus)}
        >
          {statusLabel}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}
