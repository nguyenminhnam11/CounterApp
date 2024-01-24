import React from "react";
import "./ButtonRouting.css";
import { Link } from "react-router-dom";

function ButtonRouting(props) {
  return (
    <>
      <div className="bg-blur"></div>
      <div className="container-btn">
        <Link to='/'><button>Count</button></Link>
        <Link to='stopwatch'><button>Stop Watch</button></Link>
      </div>
    </>
  );
}

export default ButtonRouting;
