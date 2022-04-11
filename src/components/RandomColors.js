import React, { useContext } from 'react'
import Context from '../context/Context';
import { arrColors } from '../helper/randomColor';
import '../App.css'

function Colors() {
  const {
    setColor,
  } = useContext(Context);

  const randomColors = [...arrColors]
  
  return (
      <>
      <div className='container margin-top'>
          <h2>Cores Aleatórias:</h2>
      </div>
  
      <div className='container'>
        {randomColors.map((color)=><div 
          className="color-board container margin5"
          key={color}
          style={{ backgroundColor: color }}
          alt={color}
          onClick={() => setColor(color)}
        />)}
      </div>
      </>

  )
}

export default Colors