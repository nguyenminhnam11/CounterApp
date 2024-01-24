import React from "react";
import "./Wrapper.css";
import ButtonRounting from "../../components/ButtonRounting";
import CounterApp from "./components/CounterApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StopWatch from "./components/StopWatch";
function Wrapper(props) {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="screen-app">
        <div className="dynamic-island"></div>
        <Routes>
          <Route path="/" element={<CounterApp />} />
          <Route path="/stopwatch" element={<StopWatch />} />
        </Routes>
        <ButtonRounting />
        <div className="home-btn"></div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default Wrapper;
