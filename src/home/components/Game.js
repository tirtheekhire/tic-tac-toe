import React from 'react';
import "../css/style.css";

const Game = ({onClick, turnValue, symbol}) => {
    return (
        <button onClick={onClick} className="square">
            {symbol}
        </button>
    );
  }
  
  export default Game;