import React, { useState } from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import Counter from "./Counter";
import Login from "./Login";
import Accordion from "./Accordion";
import TodoBoard from "./TodoBoard";
import Card from "./Card";

export default function App() {
  const [tab, setTab] = useState("ex34");

  const user1 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const user2 = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://i.imgur.com/MK3eW3As.jpg",
    imageSize: 90,
  };

  return (
    <div className="app-shell">
      {/* === Navigation Bar === */}
      <Navbar active={tab} onChange={setTab} />

      {/* === Exercise 3 & 4 === */}
      {tab === "ex34" && (
        <section className="section">
          <h2>Exercise 3 & 4 – UserProfile with Props</h2>
          <div className="content-center">
            <Card title="User 1">
              <UserProfile userData={user1} theme="light" />
            </Card>
            <Card title="User 2">
              <UserProfile userData={user2} theme="dark" />
            </Card>
          </div>
        </section>
      )}

      {/* === Exercise 5 === */}
      {tab === "ex5" && (
        <section className="section">
          <h2>Exercise 5 – Counter (useState)</h2>
          <div className="content-center">
            <Counter />
          </div>
        </section>
      )}

      {/* === Exercise 6 === */}
      {tab === "ex6" && (
        <section className="section">
          <h2>Exercise 6 – Controlled Login Form</h2>
          <div className="content-center">
            <Login />
          </div>
        </section>
      )}

      {/* === Exercise 7 === */}
      {tab === "ex7" && (
        <section className="section">
          <h2>Exercise 7 – Accordion and Panel</h2>
          <div className="content-center">
            <Accordion />
          </div>
        </section>
      )}

      {/* === Exercise 8 === */}
      {tab === "ex8" && (
        <section className="section">
          <h2>Exercise 8 – Capstone Project: Todo Kanban Board</h2>
          <TodoBoard />
        </section>
      )}
    </div>
  );
}

// === CSS inline styling ===
const styles = {
  container: {
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: "#f8fafc",
    color: "#1f2937",
    minHeight: "100vh",
    padding: "0 40px 40px",
  },
  section: {
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    padding: "30px",
    marginBottom: "45px",
  },
  flexRow: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
