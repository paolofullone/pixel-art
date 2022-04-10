import React from 'react'
import Context from './Context';

const Provider = ({ children }) => {
    const [color, setColor] = React.useState('');
    
    const context = {
        color,
        setColor,
    }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

export default Provider;
