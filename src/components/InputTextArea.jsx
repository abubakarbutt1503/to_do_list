import React from 'react'

function InputTextArea(props) {
  return (
    <div className='Add-text-area'>
        <input 
          className='Add-task' 
          value={props.value} 
          onChange={props.onChecked} 
          type="text" 
          placeholder='Add new...' 
        />
        <button className='Add-button' onClick={props.addButtonClick} >ADD</button>
    </div>
  )
}

export default InputTextArea;
