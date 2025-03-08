import React from 'react';
import { motion } from 'framer-motion';

function InputTextArea(props) {
  return (
    <div className='Add-text-area'>
        <input className='Add-task' onChange={props.onChecked} type="text" placeholder='Add new...' />
        <button className='Add-button' onClick={props.addButtonClick} >ADD</button>
    </div>
  )
}

export default InputTextArea;
