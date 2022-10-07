import { Home } from './components/home/home';
import React from "react";
import Top from "./components/header/top";
import {
  Routes,
  Route, 
  Navigate
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      {/* <h1> hello</h1> */}
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path='home/' element={<Home />} />
        {/* <Route path='/top' element={<Top/>} /> */}
      </Routes>




    </div>
  );
}

export default App;
