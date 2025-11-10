# Lab 3 – Introduction to React  
**Course:** MSc. Tran Vinh Khiem – Web Development  
**Student:** Nguyễn Thiện Nhân – 23521084  

---

## Overview
This lab introduces the fundamentals of React.js, including component-based architecture, JSX syntax, state management, props, event handling, and lifting state up.  
It culminates in a capstone project: a Simple To-Do List Application built using modern React with Vite.

---

## Part I – Foundations of React

### Exercise 1: The React Paradigm
- Explained the difference between imperative and declarative UI development.
- Identified key benefits of component-based architecture:
  1. Reusability  
  2. Maintainability  
  3. Scalability  
- Described how the Virtual DOM and reconciliation improve rendering performance.

### Exercise 2: Setting Up the Environment
- Created a new project with:
npm create vite@latest react-basics-exercise -- --template react
npm install
npm run dev

yaml
Sao chép mã
- Application runs at: http://localhost:5173
- File structure:
  - index.html → Root HTML template
  - src/main.jsx → Application entry point
  - src/App.jsx → Root component

---

## Part II – Building with Components

### Exercise 3: Functional Components and JSX
- Created `UserProfile.jsx` using function components and JSX.
- Implemented dynamic rendering with embedded JS objects and props.
- Added image rendering with dynamic attributes and CSS class binding.

### Exercise 4: Data Flow with Props
- Passed user data objects through props from App.jsx.
- Added PropTypes for validation and default props for themes.
- Implemented dynamic class styling based on the theme prop.

---

## Part III – State and Interactivity

### Exercise 5: State Management
- Created `Counter.jsx` with useState() for interactive state updates.
- Explained when to use state vs. props for component memory.

### Exercise 6: Handling User Interaction
- Built `Login.jsx` as a controlled component for input handling.
- Implemented multi-field form management using an object-based state and unified handleChange() function.
- Handled form submission using onSubmit and preventDefault().

---

## Part IV – Advanced Composition

### Exercise 7: Reusable Patterns
- Created `Card.jsx` to demonstrate wrapper components with children.
- Built `Accordion.jsx` and `Panel.jsx` to illustrate lifting state up for synchronized panel toggling.

---

## Part V – Debugging with React Developer Tools
- Used React DevTools to:
  - Inspect state updates in components.
  - Manually modify state via the Hooks panel.
  - Enable “Highlight updates when components render” to visualize re-renders.

---

## Part VI – Capstone Project: Simple To-Do List

### Goal
Build a functional To-Do List App with add, toggle, and delete features.

### Components
- TodoApp.jsx → Parent container handling all states (todos, addTodo, toggleTodo, deleteTodo)
- TodoForm.jsx → Controlled input form for adding tasks
- TodoList.jsx → Maps and renders TodoItem components
- TodoItem.jsx → Displays task info with checkbox and delete functionality

### Features
- Controlled form using useState()
- State lifted up to TodoApp for shared data
- Conditional rendering for completed tasks (line-through style)
- Real-time updates observable via React DevTools

### Final Enhancement
Upgraded UI into a Kanban-style board with three columns:
- Todo
- In Progress
- Done

Each task:
- Displays in a colorful pastel card
- Has action buttons (Move / Back / Done / Delete)
- Dynamically styled with smooth animations and responsive layout

---

## Project Structure
src/
│
├── App.jsx
├── main.jsx
│
├── components/
│ ├── UserProfile.jsx
│ ├── Counter.jsx
│ ├── Login.jsx
│ ├── Card.jsx
│ ├── Accordion.jsx
│ ├── Panel.jsx
│
├── todo/
│ ├── TodoApp.jsx
│ ├── TodoForm.jsx
│ ├── TodoList.jsx
│ ├── TodoItem.jsx
│
└── assets/

yaml
Sao chép mã

---

## Technologies Used
- React 19 (Vite)
- JavaScript (ES6+)
- PropTypes
- CSS3 + Flexbox + Media Queries
- React Developer Tools

---

## Run Locally
npm install
npm run dev

yaml
Sao chép mã
Access at: http://localhost:5173

---

## Author
Nguyễn Thiện Nhân – 23521084  
University of Information Technology (UIT)  
MSc. Tran Vinh Khiem – Web Development Lab 3
