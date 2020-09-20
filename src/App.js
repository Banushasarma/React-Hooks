import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from './components/HookCounterFive';
import ClassMouse from './components/ClassMouse';
import HookMouseLog from './components/HookMouseLog';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterFive></HookCounterFive> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouseLog></HookMouseLog> */}
      <MouseContainer></MouseContainer>
    </div>
  );
}

export default App;
