
import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';

function TaskList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task);

  function handleEdit() {
    props.onEdit(props.id, editedText);
    setIsEditing(false);
  }

  return (
    <div className="task-list-container">
      <ul className="task-list">
        <motion.li 
          className="task-item"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          layout
        >
          <Checkbox
            className="task-checkbox"
            checked={props.completed}
            onChange={() => props.onToggle(props.id)}
          />

          {isEditing ? (
            <motion.input
              type="text"
              value={editedText}
              onChange={(e) => {
                  const value = e.target.value;
                  setEditedText(value)
                  }
              }
              onBlur={handleEdit}
              className="edit-input"
              autoFocus
              initial={{ scaleX: 0.9 }}
              animate={{ scaleX: 1 }}
              transition={{ type: "spring" }}
            />
          ) : (
            <motion.span
              className={`task-text ${props.completed ? 'completed' : ''}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: props.completed ? 0.6 : 1 }}
            >
              {props.task}
            </motion.span>
          )}

          <motion.div
            className="icon-container"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <EditIcon
              className="edit-icon"
              onClick={() => setIsEditing(!isEditing)}
              component={motion.svg}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
            />
            <DeleteIcon
              className="delete-icon"
              onClick={() => props.onDelete(props.id)}
              component={motion.svg}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
            />
          </motion.div>
        </motion.li>
      </ul>
    </div>
  );
}

export default TaskList;
