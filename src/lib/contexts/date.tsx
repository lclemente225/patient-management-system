// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import {months, days} from '../dateConverter.js'
import {format, getMonth, getYear} from 'date-fns'

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState({});

  console.log(format(new Date(), "Pp"))
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
  setDate(today)
  console.log("useeffect wat", date)
}, [])

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
