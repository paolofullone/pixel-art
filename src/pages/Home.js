import React from 'react'
import RandomColors from '../components/RandomColors'
import '../App.css'
import PixelBoard from '../components/Board';

function Home() {
  return (
    <>
      <div className="container">
          <h1>Pixel Art 2.0</h1>
      </div>
      <RandomColors />
      <PixelBoard/>
    </>
  )
}

export default Home