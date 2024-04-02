import { useState, useEffect  } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import Help from "./components/Help/Help";
import HelpAdd from "./components/Help/Add/Add";
import HelpRemove from "./components/Help/Change/Change";
import HelpChange from "./components/Help/Remove/Remove";
import NoPage from "./components/NoPage/NoPage";
import * as database from "./database";

function App() {
  // Sets the initial state.
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);

    //load all task
    (async () => {
      await database.getAllTasks()
        .then((querySnapshot) => {
          const tasksData = [];
          querySnapshot.forEach((doc) => {
            tasksData.push({ id: doc.id, ...doc.data() });
          });
          setTasks(tasksData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();

    setTimeout(() => {
      setLoading(false); // Set loading state to false after 3000 milliseconds
    }, 3000);
  }, []);

  // Adds a task.
  async function addTask(description, status) {
    try {
      const taskId = await database.handleAddTask(description, status);
      const data = { description: description, status: status };
      if (taskId) {
        const newTask = { id: taskId, ...data };
        setTasks(prevTasks => [...prevTasks, newTask]);
        return true;
      }
      return false;

    } catch (error) {
      return false;
    }
  }

  //Update task status
  async function updateTask(id, status) {
    try {
      const newStatus = status === 'completed' ? 'open' : 'completed';
      const changeTask = await database.handleStatusChange(id, newStatus);

      if (changeTask){
        setTasks(prevTasks => 
          prevTasks.map(task => 
            task.id === id ? { ...task, status: newStatus } : task
          )
        );
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  //remove task
  async function removeTask(id) {
    try {
      if (await database.handleTaskRemove(id))
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
      return true;
    } catch (error) {
      return false;
    }
  }

  //remove all task
  async function removeAllTask() {
    try {
      const deleteAll = await database.handleRemoveAllTasks();
      if (deleteAll){
        setTasks([]);
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }


  return (
    <>
      <Header />
      <h1>CICD TEST1</h1>
      <Routes>
        <Route path="/" element={<Tasks
          loading={loading}
          tasks={tasks}
          onStatusChange={updateTask}
          onTaskRemove={removeTask}
          onClearTasks={removeAllTask}
        />} />
        <Route path="/add" element={<Form onAddTask={addTask} />} />
        <Route path="/help">
          <Route path="" element={<Help />} />
          <Route path="add" element={<HelpAdd />} />
          <Route path="remove" element={<HelpRemove />} />
          <Route path="change" element={<HelpChange />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
