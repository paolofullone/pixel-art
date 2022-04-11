import React, { useContext } from 'react'
import Context from '../context/Context';

import '../App.css'

function BasicColors() {
    const {
    setColor,
  } = useContext(Context);

  const basicColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

  const setBasicColor = (e) => {
    setColor(e.target.style.backgroundColor);
  }

  return (
      <>
      <div className='container margin-top'>
          <h2>Cores Básicas:</h2>
      </div>
      <div className='container'>
        {basicColors.map((color)=><div
          className="color-board container margin5"
          key={color} 
          style={{ backgroundColor: color }}
          onClick={setBasicColor}
        />)}
      </div>
      </>

  )
}

export default BasicColors