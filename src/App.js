import React from 'react';
import {ToDoMain} from './components/ToDoMain.js'
import { Judul } from './components/Judul.js';
import './App.css';


function App() {
  return (
    <div className="flex justify-center">
      <div className='w-3/4'>
        <Judul/>
        <ToDoMain/>
      </div>
    </div>
  );
}

export default App;
