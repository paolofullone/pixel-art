import React from 'react'

const Board = () => {
    const boardSize = 20;
    const makeBoard = () => {
        let board = [];
        for (let i = 0; i < boardSize; i++) {
            let row = [];
            for (let j = 0; j < boardSize; j++) {
                row.push(<div className="pixel-row" key={i + j}></div>)
            }
            board.push(<div className="pixel" key={i}>{row}</div>)
        }
        return board;
    }


  return (
    <div className="container margin-top">{makeBoard()}</div>
  )
}

export default Board