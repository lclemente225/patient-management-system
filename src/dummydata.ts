export const dummyData: dummyDataType[] = [
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate:" new Date(2024,05, 30)",
        appointmentTime: "1200",
        appointmentType: "composite"
    },
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate: "January 30 2024",
        appointmentTime: "1200",
        appointmentType: "composite"
    },
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate: "February 30 2024",
        appointmentTime: "1200",
        appointmentType: "composite"
    }
]

export type dummyDataType = {
    firstName:string, 
    cell:string, 
    appointmentDate:string,
    appointmentTime:string,
    appointmentType:string
}
/*
module.exports = {
  "primary": "--p",
  "primary-content": "--pc",

  "secondary": "--s",
  "secondary-content": "--sc",

  "accent": "--a",
  "accent-content": "--ac",

  "neutral": "--n",
  "neutral-content": "--nc",

  "base-100": "--b1",
  "base-200": "--b2",
  "base-300": "--b3",
  "base-content": "--bc",

  "info": "--in",
  "info-content": "--inc",

  "success": "--su",
  "success-content": "--suc",

  "warning": "--wa",
  "warning-content": "--wac",

  "error": "--er",
  "error-content": "--erc",
}
*/