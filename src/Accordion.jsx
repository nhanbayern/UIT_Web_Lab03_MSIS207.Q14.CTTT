// src/Accordion.jsx
import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title="About React"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        React is a JavaScript library for building UIs.
      </Panel>
      <Panel
        title="About Vite"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Vite is a modern frontend build tool.
      </Panel>
    </>
  );
}
