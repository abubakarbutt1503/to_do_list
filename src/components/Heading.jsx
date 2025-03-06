import React from 'react'

function Heading(props) {
  return (
    <div className='heading-outter'>
      <h1 className='heading'>{props.title}</h1>
    </div>
  )
}

export default Heading
