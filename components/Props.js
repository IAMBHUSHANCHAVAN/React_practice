import React from 'react'
import '../App.css';

const Props = (props) => {
  return (
    <div>
      <h1 className='head'>this is a {props.brand} based function </h1>
      <p>the name of the brand is {props.brand}</p>
      <p>the name of the brand is {props.model}</p>
      <p>the name of the brand is {props.rating}</p>
      <p>the name of the brand is {props.brand}</p>
    </div>
  )
}

export default Props
