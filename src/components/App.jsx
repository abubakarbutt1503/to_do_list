import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import '../index.css';
import Heading from './Heading';
import InputTextArea from './InputTextArea';
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);

  function handleChange(event) {
    // This function is no longer needed as we're handling input in the InputTextArea component
  }

  function addTaskButton(taskText) {
    if (taskText.trim()) {
      setTaskList(prevTasks => [
        ...prevTasks, 
        { text: taskText, completed: false }
      ]);
    }
  }

  function deleteTask(id) {
    setTaskList(prevTasks => prevTasks.filter((task, index) => index !== id));
  }

  function editTask(id, updatedTask) {
    setTaskList(prevTasks => 
      prevTasks.map((task, index) => 
        index === id ? { ...task, text: updatedTask } : task
      )
    );
  }

  function toggleComplete(id) {
    setTaskList(prevTasks =>
      prevTasks.map((task, index) =>
        index === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className='display'>
      <Heading title="To Do List" />
      <InputTextArea 
        onChecked={handleChange} 
        addButtonClick={addTaskButton} 
      />
      <AnimatePresence>
        {taskList.map((listItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            layout
          >
            <TaskList
              id={index}
              task={listItem.text}
              completed={listItem.completed}
              onDelete={deleteTask}
              onEdit={editTask}
              onToggle={toggleComplete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
