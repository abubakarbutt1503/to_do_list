import React from 'react'
import { motion } from 'framer-motion';

function Heading(props) {
  return (
    <motion.div 
      className='heading-outter'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='heading'>{props.title}</h1>
    </motion.div>
  )
}

export default Heading
