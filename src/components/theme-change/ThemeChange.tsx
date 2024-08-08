import React, {useEffect, useState} from 'react'
import {Sun, Moon} from '../../assets/svg/index.js';


const ThemeChange = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'lemonade');

    useEffect(() => {
        let themeSwitch = document.getElementsByClassName('theme-controller')[0];
        if(theme === 'coffee'){
            (themeSwitch as HTMLInputElement).checked = true;
        }
        }, [])

    useEffect(() => {
      let element = document.querySelector('html');
      element?.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);


    }, [theme]);

   
    function changeTheme(newTheme: any){
        setTheme(newTheme);
      };
      
  return (
    <>
      <label 
        className="swap swap-rotate group/label" 
      >
      
        <input 
          data-act-class="ACTIVECLASS" 
          type="checkbox" 
          className="theme-controller"
          onClick={(e) => { 
              const newTheme = (e.target as HTMLInputElement).checked ? 'coffee' : 'lemonade';
              changeTheme(newTheme)
            }} 
          />
        <Sun />
        <Moon />
      </label>
     {/*  <select className="gradientselect" data-choose-theme>
        <option disabled value="">
          Pick a theme
        </option>
        <option value="">Default</option>
        <option value="lemonade">Light</option>
        <option value="retro">Retro</option>
        <option value="dracula">Dracula</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="coffee">Coffee</option>
    </select> */}
    </>
  )
}

export default ThemeChange

/*
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

  useEffect(() => {
    const element = document.querySelector('html');
    if (element) {
      element.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <select 
        className="gradientselect" 
        data-choose-theme 
        onChange={(e) => changeTheme(e.target.value)}
        value={theme} // Set the value to the current theme
      >
        <option disabled value="">
          Pick a theme
        </option>
        <option value="default">Default</option>
        <option value="lemonade">Light</option>
        <option value="retro">Retro</option>
        <option value="dracula">Dracula</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="coffee">Coffee</option>
      </select>
    </>
  );
}

export default ThemeToggle;

*/
