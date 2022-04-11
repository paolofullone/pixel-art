import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
  const [color, setColor] = React.useState('');
  const [width, setWidth] = React.useState(15);
  const [height, setHeight] = React.useState(15);
  const [boardVisible, setBoardVisible] = React.useState(false);

  const setInitialBoard = () => {
    const INITIAL = 15;
    setHeight(INITIAL);
    setWidth(INITIAL);
    setBoardVisible(false);
  }
    
    const context = {
      color,
      setColor,
      height,
      setHeight,
      width,
      setWidth,
      boardVisible,
      setBoardVisible,
      setInitialBoard,
    }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

export default Provider;
