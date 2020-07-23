import React from 'react';
import "../css/style.css";

const Game = ({onClick, turnValue, symbol}) => {
    console.log('symbol ==>', symbol)
    console.log('turnValue ==>', turnValue)
    
    // let boardValue = turnValue === true ? 'X' : 'O';
    return (
        <button onClick={onClick} className="square">
            {symbol}
        </button>
    );
  }
  
  export default Game;