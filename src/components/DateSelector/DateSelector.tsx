import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import dummyData from '../../dummydata.js'
import { useDate } from '../../lib/contexts/date.js'
import {months, days} from '../../lib/dateConverter.js'

const DateSelector = () => {
  const {date, setDate} = useDate()
  
  useEffect(() => {
    const todayFullDate = new Date();
    let monthIndex = todayFullDate.getMonth()
    let dayIndex = todayFullDate.getDay()
    let year = todayFullDate.getFullYear()
    let monthDay = todayFullDate.getDate()
    console.log("today", todayFullDate)

    let today = {
        todayFullDate,
        month: months[monthIndex],
        dayOfWeek: days[dayIndex],
        dayOfMonth: monthDay,
        year
    }
    setDate(() => today)
  },[])

  return (
    <p className='text-center text-secondary-content'>
        {date.dayOfWeek}, {date.month} {date.dayOfMonth} {date.year}
    </p>
  )
}

export default DateSelector
