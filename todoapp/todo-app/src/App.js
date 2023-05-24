import { useState } from "react";
import { todoData } from "./todoData";
import { ToDo } from "./components/ToDo";
import { CreateTask } from "./components/CreateTask";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(todoData);

  const handleCreateNewTask = (newTask) => {
    const newToDos = [...todo, { title: newTask, completed: false }];
    setTodo(newToDos);
  };
  return (
    <>
      <div>
        <h1>To-Do Application</h1>
        {todo.map((todo, index) => (
          <ToDo index={index} todo={todo} />
        ))}
      </div>
      <div>
        <CreateTask handleCreateNewTask={handleCreateNewTask} />
      </div>
    </>
  );
}

export default App;
