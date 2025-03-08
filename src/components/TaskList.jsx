import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';

function TaskList(props) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task);

  function handleEdit(){
    props.onEdit(props.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        <li className="task-item">
          <Checkbox 
            className="task-checkbox"
            checked={props.completed}
            onChange={() => props.onToggle(props.id)}
          />
          {isEditing ? (
            <input
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
            />
          ) : (
            <span className={`task-text ${props.completed ? 'completed' : ''}`}>
              {props.task}
            </span>
          )}
          <div className="icon-container">
            <EditIcon 
              className="edit-icon" 
              onClick={() => setIsEditing(!isEditing)}
            />
            <DeleteIcon 
              className="delete-icon" 
              onClick={() => props.onDelete(props.id)}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TaskList;
