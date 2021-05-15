import React from 'react';
import './App.css';
import ArrayUse from './Components/ArrayUse';
import ChangeWithInput from './Components/ChangeWithInput';
import Object from './Components/ObjectCom';
import ToggleBetween from './Components/ToggleBetween';

function App() {
  
  return (
    <div className="App">
        <ChangeWithInput/>
        <ToggleBetween/>
        <ArrayUse/>
        <Object/>
    </div>
  );
}
export default App;
