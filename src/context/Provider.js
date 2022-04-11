import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
  const [color, setColor] = React.useState('');
  const [width, setWidth] = React.useState(15);
  const [height, setHeight] = React.useState(15);
  const [boardVisible, setBoardVisible] = React.useState(false);
    
    const context = {
      color,
      setColor,
      height,
      setHeight,
      width,
      setWidth,
      boardVisible,
      setBoardVisible,
    }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

export default Provider;
