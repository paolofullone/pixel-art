import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
  const INITIAL = 30;
  const [color, setColor] = React.useState('');
  const [width, setWidth] = React.useState(INITIAL);
  const [height, setHeight] = React.useState(INITIAL);
  const [boardVisible, setBoardVisible] = React.useState(false);

  const setInitialBoard = () => {
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
