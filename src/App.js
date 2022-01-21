import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentists Appointment",
      day: "Jan 13 at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Weekly Team Review",
      day: "Jan 10 at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Pick up dry clean",
      day: "Jan 14 at 2:00pm",
      reminder: false,
    },
  ]);
  //add task
  const addTask = (task) => {
    const ids = tasks.map((v, i) => v.id);
    const newId = Math.max(...ids) + 1;
    const newTask = { newId, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* && is a way to do the ternary, only if, no else */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show at the moment"
      )}
    </div>
  );
}

// class App extends React.component {
//   render() {
//     return <h1>hi from App class</h1>;
//   }
// }

export default App;
