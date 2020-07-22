import React from 'react';
import "../css/style.css";

function PlayerComponent(props) {
    return (
        <div class="playerNameBox">
            {props.name}
        </div>
    );
  }
  
  export default PlayerComponent;
  