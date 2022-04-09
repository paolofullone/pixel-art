import React from "react";
import {
  useLocation
} from "react-router-dom";
import '../App.css'

function NotFound() {
const location = useLocation();
  return (
        <div className='center-page'>
      <h3>
        Não encontramos a página <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default NotFound