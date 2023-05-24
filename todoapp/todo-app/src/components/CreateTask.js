import { useState } from "react";

export const CreateTask = ({ handleCreateNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) {
      return;
    }
    // add this new task to the already existing todo tasks

    handleCreateNewTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create Task
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
        <button type="submit">Create</button>
      </label>
    </form>
  );
};
