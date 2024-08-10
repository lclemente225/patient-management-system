// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import {months, days} from '../dateConverter.js'

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState({});

  const todayFullDate = new Date()
  let monthIndex = todayFullDate.getMonth()
  let dayIndex = todayFullDate.getDay()
  let year = todayFullDate.getFullYear()
  let monthDay = todayFullDate.getDate()
  
  let today = {
    todayFullDate,
    monthIndex,
    dayIndex,
    month: months[monthIndex],
    dayOfWeek: days[dayIndex],
    dayOfMonth: monthDay,
    year
}

useEffect(() => {
  setDate(today)
  console.log("useeffect wat")
}, [])

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
