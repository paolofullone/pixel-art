import React from 'react'
import '../App.css'

function Colors() {

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }

  const arrColors = [];
  const nColors = 10;
  for (let i = 0; i < nColors; i++) {
    arrColors.push(generateColor());
  }

  return (
      <>
      <div className='container margin-top'>
          <h2>RandomColors</h2>
      </div>
  
      <div className='container'>
        {arrColors.map((color)=><div 
          className="color-board container margin5"
          key={color}
          style={{ backgroundColor: color }}
          alt={color}
        />)}
      </div>
      </>

  )
}

export default Colors