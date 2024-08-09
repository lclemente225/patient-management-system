// context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
