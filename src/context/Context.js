import React, {createContext, useState, useEffect} from 'react';
export const Context = createContext();

export const ContextProvider = props => {
  const [contextData, setContextData] = useState(null);

  return (
    <Context.Provider
      value={{
        contextData, 
        setContextData,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
