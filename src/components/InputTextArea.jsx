import React, { useState } from 'react';
import { motion } from 'framer-motion';

function InputTextArea(props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      props.addButtonClick(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    props.onChecked(e);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <motion.div 
      className='Add-text-area'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input 
        className='Add-task' 
        onChange={handleChange}
        value={inputValue}
        type="text" 
        placeholder='Add new...'
        onKeyPress={handleKeyPress}
      />
      <motion.button 
        className='Add-button' 
        onClick={handleSubmit}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        ADD
      </motion.button>
    </motion.div>
  );
}

export default InputTextArea;
