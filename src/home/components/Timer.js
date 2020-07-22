import React from 'react';
import "../css/style.css";

function Timer(props) {
    return (
        <div class="timer">
           {props.time}
        </div>
    );
  }
  
  export default Timer;
  