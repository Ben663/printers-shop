import { Home } from './components/home/home';
import React from "react";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <h1>
        hello
      </h1>
      <Routes>
        {/* <Route path="/about" >
          <div> about</div>
        </Route>
        <Route path="/users">
          <div> users</div>
        </Route> */}
        <Route path="/" component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
