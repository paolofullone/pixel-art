import React, { useContext } from 'react'
import Context from '../context/Context';
import { arrColors } from '../helper/randomColor';
import '../App.css'

function Colors() {
  const {
    setColor,
    // arrColors,
  } = useContext(Context);
  // const [randomColors, setRandomColors] = useState([]);

const randomColors = [...arrColors]

  //* Tried to put randomColors in a useEffect "componentDidMount" but it didn't work.
  // * Tried to put randomColors in provider but it didn't work.
  // * Maybe this will help in the future, when I decide to implement a "get new colors" button.
  //* Both situations was triggering a re-render and change of colors.
  
  // // const generateColor = () => {
  // //   const r = Math.floor(Math.random() * 256);
  // //   const g = Math.floor(Math.random() * 256);
  // //   const b = Math.floor(Math.random() * 256);
  // //   const color = 'rgb(' + r + ',' + g + ',' + b + ')';
  // //   return color;
  // // }

  // // const arrColors = [];
  // // const nColors = 10;
  // // for (let i = 0; i < nColors; i++) {
  // //   arrColors.push(generateColor());
  // // }

  // // component did mount
  // useEffect(() => {
  //   setRandomColors(arrColors);
  // }, [setRandomColors, arrColors]);

  return (
      <>
      <div className='container margin-top'>
          <h2>RandomColors</h2>
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