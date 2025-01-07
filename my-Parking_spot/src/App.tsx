// src/App.tsx
import React from "react";
import Navbar from "./Pages/Navbar";
import Aside from "./Pages/Aside";
import TodoList from "./Pages/TodoList";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar className="bg-white shadow-lg text-center p-4 md:p-6" />

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Aside (Sidebar) */}
        <Aside className="hidden sm:block w-1/5 bg-gray-100" />

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Card Contents */}
            {/* Spaces */}
            <div>
              <h2>Spaces</h2>
              {/* Add your component or content here */}
            </div>
            
            {/* RevenueDay */}
            <div>
              <h2>Revenue Day</h2>
              {/* Add your component or content here */}
            </div>
            
            {/* TodayBooking */}
            <div>
              <h2>Today Booking</h2>
              {/* Add your component or content here */}
            </div>
            
            {/* TotalUser */}
            <div>
              <h2>Total User</h2>
              {/* Add your component or content here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
