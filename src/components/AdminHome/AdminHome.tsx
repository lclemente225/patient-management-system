import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import DateSelector from '../DateSelector/DateSelector.js'
import dummyData from '../../dummydata.js'
import { DateChangeSelectorInterface } from '../DateSelector/types.js'


const AdminHome = () => {
  const [dateChangeSelector, selectDateChangeSelector] = useState
  <DateChangeSelectorInterface>({value: ''})

  function handleDateChangeSelector(e: React.ChangeEvent<HTMLInputElement>){
    selectDateChangeSelector({
      value: e.target.value
    })
  }

  return (
    <div className='home-container'>
      <Navbar />
      <div className='card bg-base-300 p-2'>
        <form 
          className='flex gap-3 flex-col px-3 justify-center items-center'
        >
          <h5>How do you want to change your date?</h5>
          <div className='flex gap-4'>
            <label className='flex gap-2'>
              <input 
                name="dateSelector" 
                type="radio" 
                id="radio-day" 
                value="day"
                checked={dateChangeSelector.value === 'day'}
                onChange={e => handleDateChangeSelector(e)}
              />
              Day
            </label>
            <label className='flex gap-2'>
              <input 
                name="dateSelector" 
                type="radio" 
                id="radio-week" 
                value="week"
                checked={dateChangeSelector.value === 'week'}
                onChange={e => handleDateChangeSelector(e)}
              />
              Week
            </label>
            <label className='flex gap-2'>
              <input 
                name="dateSelector" 
                type="radio" 
                id="radio-month" 
                value="month"
                checked={dateChangeSelector.value === 'month'}
                onChange={e => handleDateChangeSelector(e)}
              />
              Month
            </label>
            <label className='flex gap-2'>
              <input 
                name="dateSelector" 
                type="radio" 
                id="radio-year" 
                value="year"
                checked={dateChangeSelector.value === 'year'}  
                onChange={e => handleDateChangeSelector(e)}
              />
              Year
            </label>
          </div>
        </form>
      <DateSelector dateChangeSelector={dateChangeSelector}/>
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