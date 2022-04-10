import React, { useContext } from 'react'
import Context from '../context/Context';


const Board = () => {
    const {
    color,
    } = useContext(Context);
  
    const boardSize = 20;
    const makeBoard = () => {
        let board = [];
        for (let i = 0; i < boardSize; i++) {
            let row = [];
            for (let j = 0; j < boardSize; j++) {
                row.push(<div className="pixel-row" key={i + j}></div>)
            }
          board.push(
            <div
              className="pixel"
              key={i}
              onClick={addColor}
            >{row}</div>)
        }
        return board;
    }

  const addColor = (e) => {
    e.target.style.backgroundColor = color;
  }

  return (
    <div className="container margin-top">{makeBoard()}</div>
  )
}

export default Board