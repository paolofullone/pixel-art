import React from 'react'
import '../App.css'

function RandomColors() {

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }

  const arrColors = [];
  const nColors = 5;
  for (let i = 0; i < nColors; i++) {
    arrColors.push(generateColor());
  }

  return (
      <>
      <div className='container margin-top'>
          <h2>RandomColors</h2>
      </div>
  
      <div className='container'>
        {arrColors.map((color)=><div className="pixel-board container" key={color} style={{backgroundColor: color}}/>)}
      </div>
      
      
      </>

  )
}

export default RandomColors