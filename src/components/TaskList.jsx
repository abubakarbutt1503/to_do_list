import { motion } from 'framer-motion';
import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TaskList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task);

  function handleEdit() {
    if (editedText.trim()) {
      props.onEdit(props.id, editedText);
      setIsEditing(false);
    }
  }

  return (
    <div className="task-list-container">
      <ul className="task-list">
        <motion.li 
          className="task-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Checkbox
            className="task-checkbox"
            checked={props.completed}
            onChange={() => props.onToggle(props.id)}
          />

          {isEditing ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
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
              >
                {props.task}
              </span>
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
        </motion.li>
      </ul>
    </div>
  );
}

export default TaskList;
