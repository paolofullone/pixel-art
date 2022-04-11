import React, {useContext} from 'react'
import RandomColors from '../components/RandomColors'
import '../App.css'
import BasicColors from '../components/BasicColors';
import BoardSize from '../components/BoardSize';
import Context from '../context/Context';
import Board from '../components/Board';

function Home() {
      const {
      boardVisible,
      } = useContext(Context);
  
  return (
    <>
      <div className="container">
          <h1>Pixel Art 2.0</h1>
      </div>
      <div>
        <RandomColors />
        <BasicColors/>
        {boardVisible && <Board />}
        {!boardVisible && <BoardSize />}
      </div>
    </>
  )
}

export default Home