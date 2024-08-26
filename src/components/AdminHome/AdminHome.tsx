import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import DateSelector from '../DateSelector/DateSelector.js'
import { useDate } from '../../lib/contexts/date.js'
import { DateChangeSelectorInterface } from '../DateSelector/types.js'
import {format} from 'date-fns'
import {dummyData, dummyDataType} from '../../dummydata.ts'
import SmsFn from '../smsFn/smsFn.tsx'

const AdminHome = () => {
  const {date} = useDate()
  const [dateChangeSelector, selectDateChangeSelector] = useState
  <DateChangeSelectorInterface>({value: ''})

  function handleDateChangeSelector(e: React.ChangeEvent<HTMLInputElement>){
    selectDateChangeSelector({
      value: e.target.value
    })
  }

  function checkDate(appointmentDate: string){
      let today = date.todayFullDate
      //if today isn't loaded yet then return so function doesn't run
      if(today === undefined) return
      let todayFormat = format(today, "PPP")

      if(todayFormat === appointmentDate){
        return true
      }else{
        return false
      }
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
                key="radio-day"
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
                key="radio-week"
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
                key="radio-month" 
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
                key="radio-year"
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
        dummyData.map((
          data:dummyDataType, 
          index:number) => {
            let thisDate = format(data.appointmentDate, "PPP")
            let dateCompare = checkDate(thisDate)
            let phoneNumber = data.cell
          return (
            <>
            {
              dateCompare &&
              <>
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 z-0" key={`${index}`}>
              <input type="checkbox" />
              <div className="collapse-title text-right text-xl font-medium">
                {data.firstName} {data.appointmentTime} {data.confirmed ? "confirmed" : "not confirmed"}
              </div>
              <div className="collapse-content border-green-200">
                <SmsFn phoneNumber={phoneNumber}/>
                <p>{thisDate}</p>
              </div>
            </div>
            
            <div className="divider m-1"></div>
            </>
            }
          </>
          )
        })
      }
      
      </div>
    </div>
  )
}

export default AdminHome