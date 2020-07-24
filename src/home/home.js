import React from 'react';
import './css/style.css';
import PlayerComponent from "./components/PlayerComponent.js";
import Game from "./components/Game.js";
import Timer from "./components/Timer";
import { connect } from "react-redux";
import { setSymbol, resetGame } from "./action/boardActionCreator";

const home = (props) => {

  return (
      <div className="App">
        <div className="playerContainer">
          <PlayerComponent name="Player X"/>
          <button className="startButton" onClick={() => props.reset()}>Start</button>
          <PlayerComponent name="Player O"/>
        </div>
        <div className="timerDiv">
          {/* <Timer time="4"/> */}
          <div className="gameDiv">
            {
              
              props.board.map((symbol,index) =>{
                return(
                  <Game 
                    key={index}
                    index={index}
                    symbol={symbol}
                    turnValue={props.turn}
                    onClick={() => props.handleClick(index, props.turn)}
                   />
                )
                
              })
            }
          </div>
          {/* <Timer time="0"/> */}
        </div>
          <p>{props.winner === 'n' ? '' : (props.winner === 'd')  ?  'Game Draw'  : `Player ${props.winner} win !`}</p>
      </div>
  );
}

home.defaultProps = {
  board:['','','','','','','','',''],
  turn: true,
  winner: 'n',
};

const mapStateToProps = (state) => {
  return {
    board: state.tictactoe.board,
    turn: state.tictactoe.turnValue,
    winner: state.tictactoe.winner,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    handleClick: (index, bool) => dispatch(setSymbol({index:index, bool:bool})),
    reset: () => dispatch(resetGame())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(home);
