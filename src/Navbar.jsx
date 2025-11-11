export default function Navbar({ active, onChange }) {
  const tabs = [
    { key: "ex34", label: "Exercise 3 & 4" },
    { key: "ex5", label: "Exercise 5" },
    { key: "ex6", label: "Exercise 6" },
    { key: "ex7", label: "Exercise 7" },
    { key: "ex8", label: "Exercise 8" },
  ];

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Lab 3 – Introduction to React</h1>
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              ...styles.button,
              ...(active === tab.key ? styles.activeButton : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#f1f5f9",
    borderRadius: "16px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    marginBottom: "40px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  },
  button: {
    background: "#e2e8f0",
    border: "none",
    borderRadius: "12px",
    padding: "10px 25px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    color: "#1e293b",
    transition: "all 0.25s ease",
  },
  activeButton: {
    background: "#1d4ed8",
    color: "white",
    boxShadow: "0 4px 10px rgba(29,78,216,0.3)",
  },
};
