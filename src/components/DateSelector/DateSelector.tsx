import { useEffect } from 'react'
import { useDate } from '../../lib/contexts/date.js'
import {months, days} from '../../lib/dateConverter.js'
import {dateObjType} from './types.js' 

const DateSelector = () => {
    const {date, setDate} = useDate()

    useEffect(() => {
        const thisDate = new Date();
        const nextDay = thisDate.toString();
        const separateDate = nextDay.match()
        console.log("test date", thisDate, "\n Next day: ",nextDay,"\n separate DAte: ", separateDate)
    },[])

    function monthIndexCalc(
        index: number, 
        dayOfMonth: number, 
        monthDays: number, 
        prevDayOfMonth: number,
        prevMonthObj?: {name:string, numberDays: number} | undefined, 
        ){
        const {name, numberDays} = prevMonthObj ?? {};
        let indexVal = index;
       
        if(prevDayOfMonth === 1 && dayOfMonth === numberDays){
            return indexVal-1
        }
        if(prevDayOfMonth === monthDays && dayOfMonth === 1){
            return indexVal+1
        } 
        if(dayOfMonth >= 1 && dayOfMonth < monthDays){
        }
        
        return indexVal
    }

    function JanOrDecMonthIndexCalc(
        index: number,
        dayOfMonth: number, 
        prevDayOfMonth: number
        ){
        if(index === 0){
            if(dayOfMonth === 31 && prevDayOfMonth === 1){
                return 11
            }
            if(dayOfMonth === 1 && prevDayOfMonth === 31){
                return 1
            }
            
        return 0
        }
        if(index === 11){
            if(dayOfMonth === 1 && prevDayOfMonth === 31){
                return 0
            }
            if(dayOfMonth === 30 && prevDayOfMonth === 1){
                return 10
            }
            
        return 11
        }
        //if days of month is the last day then go to feb or jan
        //if days of month is first day then same index or nov or dec
    }
    //

    function selectMonthIndexCalc(
        index: number, 
        dayOfMonth: number, 
        monthDays: number, 
        prevDayOfMonth: number,
        prevMonthObj?: {name:string, numberDays: number}, 
        ){
        if(index === 0 || index === 11){
            return JanOrDecMonthIndexCalc(index, dayOfMonth, prevDayOfMonth)
        }
        return monthIndexCalc(index, dayOfMonth, monthDays, prevDayOfMonth, prevMonthObj)
    }

    function dayOfMonthVarCalc(
        obj: any, 
        direction: Boolean, 
        months:{name:string, numberDays: number}[]
        ){
        //if day of month is less then the number of days
        let newObj = {...obj}
        let newDayOfMonth = newObj.dayOfMonth;
        direction ? newDayOfMonth+=1 : newDayOfMonth-=1 
        //console.log("dayofmonthvarcals current month days, ", newDayOfMonth,", prev month days: ",months[newObj.monthIndex-1]["numberDays"])
        if(newDayOfMonth > 0 && newDayOfMonth <= months[newObj.monthIndex]["numberDays"]) { 
            return newDayOfMonth
        }else{
            //change month index to change month
            return direction ? 1 : months[newObj.monthIndex-1]["numberDays"]
        }
    }

    function JanOrDecMonthDayCalc(
        index: number, 
        dateObj: dateObjType, 
        direction: Boolean){
        let newObj = {...dateObj}
        let newDayOfMonth = newObj.dayOfMonth;
        direction ? newDayOfMonth+=1 : newDayOfMonth-=1 

        if(index === 0){
            if(newDayOfMonth > 0 && newDayOfMonth <= months[0]["numberDays"]) { 
                return newDayOfMonth
            }else{
                //change month index to change month
                return direction ? 1 : months[11]["numberDays"]
            }
        }
        if(index === 11){
            if(newDayOfMonth > 0 && newDayOfMonth <= months[11]["numberDays"]) { 
                return newDayOfMonth
            }else{
                //change month index to change month
                return direction ? 1 : months[10]["numberDays"]
            }
        }
    }

    function selectDayOfMonthIndexCalc(
        monthIndex: number,
        obj: any, 
        direction: Boolean, 
        months:{name:string, numberDays: number}[]
        ){
            console.log("monthIndex, ", monthIndex)
        if(monthIndex === 0 || monthIndex === 11){
            return JanOrDecMonthDayCalc(monthIndex, obj, direction)
        }
        return dayOfMonthVarCalc(obj, direction, months)
    }

    function changeDayOfWeek(direction: Boolean, dateObj: {dayIndex:number}){
        let newObj = {...dateObj}
       return direction ? 
        (newObj.dayIndex < 6 ? newObj.dayIndex+=1 : 0 )
        :
        (newObj.dayIndex > 0 ? newObj.dayIndex-=1 : 6 );
    }
 

    function changeDay(direction: Boolean){

        setDate((dateObj: any) => {
            //monthIndex(which month), 
            //dayOfMonth(current numbered day of the month), 
            //numberDays(total number of days in current month)
            let monthIndex = dateObj.monthIndex;
            let prevDayOfMonth = dateObj.dayOfMonth;
            let currMonthDays = dateObj.month.numberDays;

            let dayIndexVar = changeDayOfWeek(direction, dateObj)
            let dayOfWeekVar = days[dayIndexVar];
            //dont touch dayOfMonthVar 
            let dayOfMonthVar = selectDayOfMonthIndexCalc(monthIndex, dateObj, direction, months);

            let monthIndexVal = selectMonthIndexCalc(monthIndex, dayOfMonthVar, currMonthDays, prevDayOfMonth, months[monthIndex-1]);
            let monthVar = months[monthIndexVal];
            return { 
                ...dateObj, 
                dayIndex: dayIndexVar, 
                monthIndex: monthIndexVal,
                month: monthVar,
                dayOfWeek: dayOfWeekVar, 
                dayOfMonth: dayOfMonthVar
            }
        })
    }

    return (
        <p className='text-center text-secondary-content'>
            <button 
                className='btn btn-2 my-2'
                onClick={() => {
                changeDay(false)
            }}>
                -1 Day
            </button>
            <span className='px-2'>
            {date.dayOfWeek}, {date.month?.name} {date.dayOfMonth} {date.year}
            </span>
            <button 
                className='btn btn-2 my-2'
                onClick={() => {
                changeDay(true)
            }}>
                +1 Day
            </button>
        </p>
    )
}

export default DateSelector