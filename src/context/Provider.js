import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
  const [color, setColor] = React.useState('');
  const [width, setWidth] = React.useState(20);
  const [height, setHeight] = React.useState(20);
    
    const context = {
      color,
      setColor,
      height,
      setHeight,
      width,
      setWidth,
    }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

export default Provider;
