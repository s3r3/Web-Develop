// src/App.tsx
import React from "react";
import Navbar from "./Pages/Navbar";
import Aside from "./Pages/Aside";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Aside />
    </div>
  );
};

export default App;
