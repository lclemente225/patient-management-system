import { useState, useEffect } from "react";
import {Home} from './components/index'
import {Sun, Moon} from './assets/svg/index.js'
import { themeChange,themeToggle } from "theme-change";
import "./App.css";


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [themeName, setTheme] = useState("lemonade");

  async function test(){
    fetch('http://localhost:3000/dude')
    .then(info => info.json())
    .then((data) => {
      let message = data.message
      setGreetMsg(message)
    })
    .catch(err => console.log("eror", err))
  }

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  function changeTheme(){
    themeName === 'lemonade' ? setTheme('coffee') : setTheme('lemonade')
    return
  }

  return (
      <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input 
          data-toggle-theme="lemonade, coffee" 
          data-act-class="ACTIVECLASS" 
          type="checkbox" 
          className="theme-controller"
          checked={(x) => themeChange(x)}
          />

        <Sun/>
        <Moon/>
      </label>
    <div data-theme="lemonade" data-act-class="ACTIVECLASS">
      
      <Home/>
    </div>
    </>
  );
}

export default App;
