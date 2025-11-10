// src/Panel.jsx
export default function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}
