import { useEffect } from 'react'
import { useDate } from '../../lib/contexts/date.js'
import {months, days} from '../../lib/dateConverter.js'
import {dateObjType, selectDateParameterType} from './types.js' 
import {
        format, 
        add, 
        sub,
        addYears, 
        subYears, 
        addMonths, 
        subMonths, 
        addWeeks, 
        subWeeks, 
        addDays,
        subDays, 
        getDate,
        setDate,
        setMonth,
        getYear,
        getDaysInMonth, 
        eachWeekendOfMonth
        } from 'date-fns'


let selectDateParameter: selectDateParameterType = {
    day: false,
    week: false,
    month: false,
    sixMonth: false, 
    year: false
}

const DateSelector = ({dateChangeSelector}) => {
    const {date, setDateState} = useDate()

    function daysInMonthTotal() {
        let emptyArray = []
        let fullDate = date.todayFullDate
        let daysInMonth = getDaysInMonth(fullDate)
        let daysInMonthArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)
        for(let day of daysInMonthArray){
            let dayOfMonthSet = setDate(fullDate,Number(day))
            let weekDayOfDay = format(dayOfMonthSet, "E")
            let dayOfMonth = getDate(dayOfMonthSet)

            let dayObj = {
                dayName: weekDayOfDay,
                dayOfMonth
            }
            emptyArray.push(dayObj)
        }

        return emptyArray
    }

    function weeksInMonth(){
        let fullDate = date.todayFullDate
        let weekendsArray = eachWeekendOfMonth(fullDate)
        let weekQuantityArray = Array.from({ length: (weekendsArray.length/2) }, (_, i) => i + 1)
        return weekQuantityArray
    }

    let daysInMonthArray = daysInMonthTotal();

    function changeDate(selectDateParameter: selectDateParameterType, direction: Boolean, thisDay: string){
        //change day
        const {day,week,month,sixMonth, year} = selectDateParameter
        if(day){
            let newDay = direction ? addDays(thisDay, 1) : subDays(thisDay, 1)
            return newDay
        }
        if(week){
            let newWeek = direction ? addWeeks(thisDay, 1) : subWeeks(thisDay, 1)
            return newWeek
        }
        if(month){
            //if 1st week, go to 1st week of next month on same weekday
            let newMonth = direction ? addMonths(thisDay, 1) : subMonths(thisDay, 1)
            return newMonth 
        }
        if(sixMonth){
            //if 1st week, go to 1st week of next month on same weekday
            let newSixMonth = direction ? addMonths(thisDay, 6) : subMonths(thisDay, 6)
            return newSixMonth 
        }
        if(year){
            //if 1st week, go to 1st week of next month on same weekday
            let newYear = direction ? addYears(thisDay, 1) : subYears(thisDay, 1)
            return newYear 
        }
    }

    function changeDay(selectDateParameter: selectDateParameterType, direction: Boolean){
        let thisDay: string = format(date.todayFullDate, "Pp");
        let newDay: Date = changeDate(selectDateParameter, direction, thisDay)
        
        let month = format(newDay, "LLLL")
        let year = getYear(newDay)
        let dayOfMonth = getDate(newDay)
        let dayOfWeek = format(newDay, "EEEE")

        setDateState((dateObj: dateObjType) => {
            return { 
                ...dateObj,
                todayFullDate: newDay,
                month,
                year,
                dayOfMonth,
                dayOfWeek 
            }
        })
    }

    function handleSetMonth(index: number){
        setDateState((dateObj: dateObjType) => {
            let thisDay = dateObj.todayFullDate;
            let newMonth = setMonth(thisDay, index)
 
            let month = format(newMonth, "LLLL")
            let year = getYear(newMonth)
            let dayOfMonth = getDate(newMonth)
            let dayOfWeek = format(newMonth, "EEEE")

            return { 
                ...dateObj,
                todayFullDate: newMonth,
                month,
                year,
                dayOfMonth,
                dayOfWeek 
            }
        })
    }

    function handleSetDay(dayNumber: number){
        //need to ohave an array of all lthe day of the month
        setDateState((dateObj: dateObjType) => {
            let thisDay = dateObj.todayFullDate;
            let newDay = setDate(thisDay, dayNumber)
 
            let month = format(newDay, "LLLL")
            let year = getYear(newDay)
            let dayOfMonth = getDate(newDay)
            let dayOfWeek = format(newDay, "EEEE")

            return { 
                ...dateObj,
                todayFullDate: newDay,
                month,
                year,
                dayOfMonth,
                dayOfWeek 
            }
        })
    }

    return (
        <div className='text-center text-secondary-content'>
            {
            dateChangeSelector.value === 'year' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, year: true}, false)
                }}>
                    prev Year
                </button>
            }
            {
            dateChangeSelector.value === 'month' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, sixMonth: true}, false)
                }}>
                    -6 Mo
                </button>
            }
            {
            dateChangeSelector.value === 'month' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, month: true}, false)
                }}>
                    -1 Mo
                </button>
            }
             {
            dateChangeSelector.value === 'week' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, week: true}, false)
                }}>
                    Prev Week
                </button>
            }
            <button 
                className='btn btn-2 my-2'
                onClick={() => {
                changeDay({...selectDateParameter, day: true}, false)
            }}>
                -1 Day
            </button>
            <span className='px-2'>
            {date.dayOfWeek}

            <div className='mx-2 dropdown dropdown-bottom'>
                <div 
                    tabIndex={0} 
                    role="button" 
                    className="btn font-light text-base text-secondary-content bg-base-200 border-0 m-1 z-50"
                >
                    {date.month}
                </div>
                <ul
                    tabIndex={0}
                    className="menu border-2 dropdown-content bg-base-100 rounded-box z-50 mt-4 w-52 p-2 shadow z-50">
                    {
                        months.map((
                            months: {name: string, numberDays: number}, 
                            index: number
                            ) => {
                            return (
                                <li 
                                    key={`${months.name}-month`}
                                    onClick={() => handleSetMonth(index)}
                                className="bg-base-100 hover:bg-base-300"
                                >
                                    <a>{months.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> 

            <div className='mx-2 dropdown dropdown-bottom dropdown-end'>
                <div 
                    tabIndex={0} 
                    role="button" 
                    className="btn text-base text-secondary-content font-light bg-base-200 border-0 m-1 z-50"
                >
                    {date.dayOfMonth}
                </div>
                <ul
                    tabIndex={0}
                    className="
                    menu 
                    dropdown-content
                    bg-base-100 
                    border-2
                    rounded-box 
                    z-50 
                    mt-4 
                    w-[340px]
                    h-max 
                    p-2
                    flex
                    flex-row
                    flex-wrap
                    shadow 
                    ">
                    {
                            daysInMonthArray.map((
                                {
                                dayName,
                                dayOfMonth
                                },
                                index
                                ) => {
                                return (
                                    <li  
                                        onClick={() => { 
                                        handleSetDay(dayOfMonth)
                                    }}
                                    key={`${index}-${months.name}`}
                                    className="w-min h-max mx-1"
                                    >
                                        {dayName}
                                        <a 
                                            className="bg-base-100 m-0 w-9 flex items-center justify-center">
                                            {dayOfMonth}
                                        </a>
                                    </li>
                                )
                                })
                        
                    }
                </ul>
            </div> 
            {date.year}
            </span>
            <button 
                className='btn btn-2 my-2'
                onClick={() => {
                changeDay({...selectDateParameter, day: true},true)
            }}>
                +1 Day
            </button>
            {
            dateChangeSelector.value === 'week' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, week: true}, true)
                }}>
                    Next Week
                </button>
            }
            {
            dateChangeSelector.value === 'month' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, month: true}, true)
                }}>
                    +1 Mo
                </button>
            }
            {
            dateChangeSelector.value === 'month' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, sixMonth: true}, true)
                }}>
                    +6 Mo
                </button>
            }
            {
            dateChangeSelector.value === 'year' &&
                <button 
                    className='btn btn-2 my-2'
                    onClick={() => {
                    changeDay({...selectDateParameter, year: true}, true)
                }}>
                    next Year
                </button>
            }
        </div>
    )
}

export default DateSelector