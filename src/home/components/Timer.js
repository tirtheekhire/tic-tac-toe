import React from 'react';
import "../css/style.css";

const Timer = (props) => {
    return (
        <div className="timer">
           {props.time}
        </div>
    );
  }
  
  export default Timer;
  