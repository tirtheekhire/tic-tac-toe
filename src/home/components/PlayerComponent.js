import React from 'react';
import "../css/style.css";

const PlayerComponent = (props) => {
    return (
        <div className="playerNameBox">
            {props.name}
        </div>
    );
  }
  
  export default PlayerComponent;
  