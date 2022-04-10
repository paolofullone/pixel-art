import React from 'react'
import RandomColors from '../components/RandomColors'
import '../App.css'
import PixelBoard from '../components/Board';
import BasicColors from '../components/BasicColors';

function Home() {
  return (
    <>
      <div className="container">
          <h1>Pixel Art 2.0</h1>
      </div>
      <RandomColors />
      <BasicColors/>
      <PixelBoard/>
    </>
  )
}

export default Home