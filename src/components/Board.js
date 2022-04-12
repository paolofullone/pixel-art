import React, { useContext } from 'react'
import Context from '../context/Context';


const Board = () => {
    const {
      color,
      width,
      height,
      setInitialBoard,
    } = useContext(Context);
  
    const makeBoard = () => {
        let board = [];
        for (let row = 0; row < width; row++) {
            let row = [];
            for (let column = 0; column < height; column++) {
                row.push(<div className="pixel-row" key={row + column}></div>)
            }
          board.push(
            <div
              className="pixel"
              key={row}
              onClick={addColor}
            >{row}</div>)
        }
        return board;
    }
  
  const addColor = (e) => {
    e.target.style.backgroundColor = color;
  }

  return (
    <>
      <div className="container">
        <h3
          type="button"
          className='container margin-top pointer'
          onClick={setInitialBoard}
        >
         Alterar o tamanho do Board.
        </h3>
        </div>
        {color && (<div className='container'>Cor selectionada: {color}</div>)}
      <div className="container margin-top pointer">{makeBoard()}</div>
    </>
  )
}

export default Board