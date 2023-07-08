import React, { useState } from 'react'

const Hooks1 = () => {
    const [color , setColor] = useState("red")
  return (

    <div>
      <h1>color is ${color}</h1>
      <button type='submit' onClick={setColor("blue")}></button>
    </div>
  )
}

export default Hooks1
