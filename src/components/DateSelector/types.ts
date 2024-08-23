export type dateObjType = {
    todayFullDate: Date,
    days: string[],
    month: {name: string, numberDays: number},
    dayOfWeek: number,
    dayOfMonth: number,
    year: number
}

export type selectDateParameterType = {
    day: Boolean,
    week: Boolean,
    month: Boolean,
    sixMonth: Boolean, 
    year: Boolean
}

export interface DateChangeSelectorInterface {
    value: string
  }