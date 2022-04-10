import React, {useState} from 'react'
import '../App.css'

function BasicColors() {
  const [color, setColor] = useState('');
  console.log(color);

  const basicColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

  const pickcolor = (e) => {
    setColor(e.target.style.backgroundColor);
  }

  return (
      <>
      <div className='container margin-top'>
          <h2>Basic Colors</h2>
      </div>
      <div className='container'>
        {basicColors.map((color)=><div
          className="color-board container margin5"
          key={color} 
          style={{ backgroundColor: color }}
          onClick={pickcolor}
        />)}
      </div>
      </>

  )
}

export default BasicColors