import { motion } from 'framer-motion';
import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function TaskList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task);

  function handleEdit() {
    if (editedText.trim()) {
      props.onEdit(props.id, editedText);
      setIsEditing(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleEdit();
    }
  }

  const formatDate = (date) => {
    const options = { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    };
    return new Date().toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    const options = { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    };
    return new Date().toLocaleTimeString('en-US', options);
  };

  return (
    <motion.li 
      className="task-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <Checkbox
        className="task-checkbox"
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
        size="small"
      />

      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="edit-input"
              autoFocus
            />
            <CheckCircleIcon
              className="save-icon"
              onClick={handleEdit}
            />
          </>
        ) : (
          <>
            <span
              className={`task-text ${props.completed ? 'completed' : ''}`}
              title={props.task}
            >
              {props.task}
            </span>
            <div className="task-meta">
              <span className="task-date">
                <CalendarTodayIcon fontSize="small" />
                {formatDate()}
              </span>
              <span className="task-time">
                <AccessTimeIcon fontSize="small" />
                {formatTime()}
              </span>
            </div>
            <div className="icon-container">
              <EditIcon
                className="edit-icon"
                onClick={() => setIsEditing(true)}
              />
              <DeleteIcon
                className="delete-icon"
                onClick={() => props.onDelete(props.id)}
              />
            </div>
          </>
        )}
      </div>
    </motion.li>
  );
}

export default TaskList;
