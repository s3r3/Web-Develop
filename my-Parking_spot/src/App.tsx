// src/App.tsx
import React from "react";
import Navbar from "./Pages/Navbar";
import Aside from "./Pages/Aside";
import TodoList from "./Pages/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <TodoList/>
    </div>
  );
};

export default App;
