import { useDate } from '../../lib/contexts/date.js'
import {months, days} from '../../lib/dateConverter.js'

const DateSelector = () => {
    const {date, setDate} = useDate()

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
        daysOfMonth: number, 
        monthDays: number, 
        prevDayOfMonth: number
        ){
        //if monthIndex = 0 or 11 trigger this function
        console.log(daysOfMonth, monthDays)
        if(index === 0){
            if(daysOfMonth === monthDays){
                console.log("end of jan")
            }
        }
        if(index === 11){
            if(daysOfMonth === monthDays){
                console.log("end of dec")
            }
        }
        return index
        //if days of month is the last day then go to feb or jan
        //if days of month is first day then same index or nov or dec
    }

    function selectMonthIndexCalc(
        index: number, 
        dayOfMonth: number, 
        monthDays: number, 
        prevDayOfMonth: number,
        prevMonthObj?: {name:string, numberDays: number}, 
        ){
        if(index < 11 && index > 0){
            return monthIndexCalc(index, dayOfMonth, monthDays, prevDayOfMonth, prevMonthObj)
        }
        if(index === 0 || index === 11){
            return JanOrDecMonthIndexCalc(index, dayOfMonth, monthDays, prevDayOfMonth)
        }
    }

    function dayOfMonthVarCalc(obj: any, direction: Boolean) {
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

    function changeDayOfWeek(direction: Boolean, dateObj: {dayIndex:number}){
        let newObj = {...dateObj}
       return direction ? 
        (newObj.dayIndex < 6 ? newObj.dayIndex+=1 : 0 )
        :
        (newObj.dayIndex > 0 ? newObj.dayIndex-=1 : 6 );
    }
 

    function changeDay(direction: Boolean){

        setDate((dateObj: any) => {
            let monthIndex = dateObj.monthIndex;
            let prevDayOfMonth = dateObj.dayOfMonth;
            let currMonthDays = dateObj.month.numberDays;

            let dayIndexVar = changeDayOfWeek(direction, dateObj)
            let dayOfWeekVar = days[dayIndexVar];
            //dont touch dayOfMonthVar
            let dayOfMonthVar = dayOfMonthVarCalc(dateObj, direction);

            let monthIndexVal = selectMonthIndexCalc(0, dayOfMonthVar, currMonthDays, prevDayOfMonth, months[monthIndex-1]);
            let monthVar = months[0];
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
                Subtract Date
            </button>
            <span className='px-2'>
            {date.dayOfWeek}, {date.month?.name} {date.dayOfMonth} {date.year}
            </span>
            <button 
                className='btn btn-2 my-2'
                onClick={() => {
                changeDay(true)
            }}>
                Add Date
            </button>
        </p>
    )
}

export default DateSelector