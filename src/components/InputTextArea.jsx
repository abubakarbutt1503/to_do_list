import React from 'react'
import { motion } from 'framer-motion';

function InputTextArea(props) {
  return (
    <motion.div 
      className='Add-text-area'
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.input 
        className='Add-task'
        value={props.value} 
        onChange={props.onChecked} 
        type="text" 
        placeholder='Add new...'
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button 
        className='Add-button' 
        onClick={props.addButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ADD
      </motion.button>
    </motion.div>
  )
}

export default InputTextArea;
