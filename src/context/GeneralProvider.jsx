import React, { createContext, useState,useContext} from 'react';

const StateContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ screenSize, setScreenSize,activeMenu, setActiveMenu}}>
      {children}
    </StateContext.Provider>
  );
};

export const useGeneralContext = () => useContext(StateContext);
