export const dummyData: dummyDataType[] = [ 
    {
    firstName: "Lawrence",
    cell: "408-687-9183",
    appointmentDate:new Date(),
    appointmentTime: "12pm",
    appointmentType: "composite",
    confirmed: true
    }, 
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate:new Date(2024, 5, 30),
        appointmentTime: "1200",
        appointmentType: "composite",
        confirmed: true
    }, 
    {
        firstName: "Jorence",
        cell: "408-687-9133",
        appointmentDate:new Date(2024, 5, 30),
        appointmentTime: "1200",
        appointmentType: "composite",
        confirmed: true
    },
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate:new Date(2024, 1, 30),
        appointmentTime: "1200",
        appointmentType: "composite",
        confirmed: true
    },
    {
        firstName: "Lawrence",
        cell: "408-687-9183",
        appointmentDate:new Date(2024, 6, 30),
        appointmentTime: "1200",
        appointmentType: "composite",
        confirmed: true
    }
]

export type dummyDataType = {
    firstName:string, 
    cell:string, 
    appointmentDate:Date,
    appointmentTime:string,
    appointmentType:string,
    confirmed: Boolean
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