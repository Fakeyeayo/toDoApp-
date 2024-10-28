import { useState } from "react";
import "./App.css";

function App() {
  const [newtask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleOnClick = () => {
    const taskDet = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskEntry: newtask,
    };

    console.log("button clicked");
    console.log({ newtask });
    if (newtask.trim() !== "") {
      setTaskList([...taskList, taskDet]);
    } else {
      alert("Task can not be empty");
    }
    // setTaskList([...taskList, newtask]);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <div className="body">
        <div className="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Write your task"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleInputChange}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleOnClick}
          >
            Add Task
          </button>

          <div className="taskList">
            {taskList.map((task) => {
              return (
                <div>
                  <p className="individualTask">
                    {task.taskEntry}
                    <div>
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="firstCheckbox"
                      />
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
