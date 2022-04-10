import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Provider from './context/Provider';


import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'

const App = () => {
  return (
    <Provider>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;