import React, {useState} from 'react'
import ThemeChange from '../theme-change/ThemeChange'
import {HamburgerMenu} from '../../assets/svg/index.js'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none dropdown dropdown-hover dropdown-bottom dropdown-start">
        <div  
          tabIndex={0} 
          role="button" 
          className="btn btn-ghost rounded-btn" 
        >
        <HamburgerMenu/>
        </div>
        <ul 
        className={`dropdown-content menu bg-base-200 z-[1] border-2 rounded-box w-56 p-2 shadow `}>
          <li><a>Your Account</a></li>
          <li><a>Manage Patients</a></li>
          <li><a>Send Email / Text</a></li>
        </ul>
      </div>

      <div className="flex-1 flex-row-reverse">
        <a className="px-5 hover:text-primary cursor-pointer text-xl">
          Enameled
        </a>
      </div>

      <ThemeChange/>
    </div>
  )
}

export default Navbar

/*
Enameled
ToothTracker
FillingsUp
TrackYourTeeth
PatientWizdom
WeAreRealDoctors
DentistDrive
DentalHelper
*/