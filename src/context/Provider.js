import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
    const [color, setColor] = React.useState('');
    
    const generateColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = 'rgb(' + r + ',' + g + ',' + b + ')';
        return color;
    }

    const arrColors = [];
    const nColors = 10;
    for (let i = 0; i < nColors; i++) {
        arrColors.push(generateColor());
    }

    const context = {
        color,
        setColor,
        arrColors,
        nColors,
    }
    
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

export default Provider;
