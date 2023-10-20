import './App.css';
import Button from './component/button';
import Counter from './component/counter';
//import jumpt 
import { useState } from 'react';
//importamos el logo
import logo from './img/ecuador.png';
function App() {
  //array of click 
  const [click, setClick] = useState(0);


  const managerClick = () => {
    setClick(click + 1);
  }
  //restar counter
  const managerRestart = () => {
    setClick(0);
  }
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className='img-logo'
          src={logo}
          alt='Logo de Anyel EC' />
        <br></br>
      </div>
      <div className="main-container">

        <Button
          text="click"
          isButtonClicked={false}
          managerClick={managerClick}
        ></Button>
        <Button
          text="restart"
          isButtonClicked={true}
          managerClick={managerRestart}
        ></Button>
        <Counter counter={click}></Counter>





      </div>

    </div>
  );
}

export default App;
