import React, { useEffect, useState } from "react";
import "./StopWatch.css";

function StopWatch(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <div className="time">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="action-btn">
        {running ? (
          <button id="stop"
            onClick={() => {
              setRunning(false);
            }}
          >
            STOP
          </button>
        ) : (
          <button id="start"
            onClick={() => {
              setRunning(true);
            }}
          >
            START
          </button>
        )}
        <button onClick={() => setTime(0)}>RESET</button>
      </div>
    </div>
  );
}

export default StopWatch;
