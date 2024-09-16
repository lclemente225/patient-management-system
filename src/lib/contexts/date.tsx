// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import {format, getMonth, getYear} from 'date-fns'

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [date, setDateState] = useState({});

  const todayFullDate = new Date()
  let month = format(todayFullDate, "LLLL")
  let year = getYear(todayFullDate)
  let dayOfMonth = format(todayFullDate, "d")
  let dayOfWeek = format(todayFullDate, "EEEE")
  
  let today = {
    todayFullDate,
    month,
    dayOfWeek,
    dayOfMonth,
    year
  }

useEffect(() => {
  setDateState(today)
}, [])

  return (
    <DateContext.Provider value={{ date, setDateState }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
