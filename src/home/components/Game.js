import React from 'react';
import "../css/style.css";

const Game = ({onClick, symbol}) => {
    return (
        <button onClick={onClick} className="square">
            {symbol}
        </button>
    );
  }
  
  export default Game;