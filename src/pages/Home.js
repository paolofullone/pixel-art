import React from 'react'
import Colors from '../components/Colors'
import '../App.css'
import PixelBoard from '../components/Board';

function Home() {
  return (
    <>
      <div className="container">
          <h1>Pixel Art 2.0</h1>
      </div>
      <Colors />
      <PixelBoard/>
    </>
  )
}

export default Home