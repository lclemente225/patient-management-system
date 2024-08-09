import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import DateSelector from '../DateSelector/DateSelector.js'
import dummyData from '../../dummydata.js'
import { useDate } from '../../lib/contexts/date.js'


const AdminHome = () => {

  console.log("dummy", dummyData)
  return (
    <div className='home-container'>
      <Navbar />
      <div className='card bg-base-300 p-2'>
        <DateSelector/>
      {
        dummyData.map((data, index) => {
          
          return (
            <>
          <div className="collapse bg-base-100">
            <input type="radio" name={`daily-schedule`} />
            <div className="collapse-title text-right text-xl font-medium">
              {data.firstName}
            </div>
            <div className="collapse-content border-green-200">
              <p>{data.appointmentDate}</p>
            </div>
          </div>
          
          <div className="divider m-1"></div>
          </>
          )
        })
      }
      
      </div>
    </div>
  )
}

export default AdminHome