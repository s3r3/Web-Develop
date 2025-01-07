// my-Parking_spot/src/Pages/TodoList.tsx
import React, { useEffect, useState } from "react";
import { fetchTodos } from "../context/api";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getTodos();
  }, []);

  if (loading) return <p className="text-center text-lg font-bold mt-10">Loading...</p>;
  if (error) return <p className="text-center text-lg font-bold text-red-500 mt-10">Error: {error.message}</p>;
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-5">Todo List</h2>
      <ul className="max-w-2xl mx-auto bg-white shadow-md rounded-lg divide-y divide-gray-200">
        {todos.map((todo: any) => (
          <li key={todo.id} className="p-4 flex items-center justify-between space-x-4">
            <div>
              <h3 className="text-lg font-medium">{todo.title}</h3>
              <p className={todo.completed ? "text-green-500" : "text-red-500"}>
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => console.log(`Todo ${todo.id} clicked`)}
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
