// App.jsx
import React, { useState } from 'react';
import '../index.css';
import Heading from './Heading';
import InputTextArea from './InputTextArea';
import TaskList from './TaskList';

function App() {
  const [addTask, setAddTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange (event) {
    setAddTask(event.target.value);
  };

  function addTaskButton () {
    if (addTask.trim()) {
      setTaskList(prevTasks => [
        ...prevTasks, 
        { text: addTask, completed: false }
      ]);
      setAddTask("");
    }
  };

  function deleteTask (id) {
    setTaskList(prevTasks => prevTasks.filter((task, index) => index !== id));
  };

    function editTask (id, updatedTask) {
    setTaskList(prevTasks => 
      prevTasks.map((task, index) => 
        index === id ? { ...task, text: updatedTask } : task
      )
    );
  };

  function toggleComplete (id) {
    setTaskList(prevTasks =>
      prevTasks.map((task, index) =>
        index === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='display'>
      
      <Heading title="To Do List" />

      <InputTextArea 
        value={addTask}
        onChecked={handleChange} 
        addButtonClick={addTaskButton} 
      />
      
      {taskList.map((listItem, index) => (
        <TaskList
          key={index}
          id={index}
          task={listItem.text}
          completed={listItem.completed}
          onDelete={deleteTask}
          onEdit={editTask}
          onToggle={toggleComplete}
        />
      ))}
    </div>
  );
}

export default App;