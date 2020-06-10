import React, { useRef } from 'react';
import './App.css'
import RefHook from './components/RefHook';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import RefHook2 from './components/RefHook2';


function App() {
  return (
    <div className="App">   
    <h1>Jocatins</h1>
    <RefHook/>
    <ClassTimer/>
    <HookTimer/>
    <RefHook2/>
    </div>
  );
}

export default App;
