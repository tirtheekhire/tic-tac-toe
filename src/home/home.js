import React from 'react';
// import logo from '../logo.svg';
import './css/style.css';
import PlayerComponent from "./components/PlayerComponent.js";
import Game from "./components/Game.js";
import Timer from "./components/Timer";
import { connect } from "react-redux";
import { setSymbol } from "./action/boardActionCreator";
// import { initialState } from "../rootReducer.js";


const home = (props) => {
  return (
    <body>
      <div className="App">
        <div className="playerContainer">
          <PlayerComponent name="Player 1"/>
          <button className="startButton" onClick="">Start</button>
          <PlayerComponent name="Player 2"/>
        </div>
        <div className="timerDiv">
          <Timer time="4"/>
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
          <Timer time="0"/>
        </div>
        <p>Player 1 win !</p>
      </div>
    </body>
  );
}
home.defaultProps = {
  board:['','','','','','','','',''],
  turn: true,
};

const mapStateToProps = (state) => {
  return {
    board: state.tictactoe.board,
    turn: state.tictactoe.turnValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    handleClick: (index, bool) => dispatch(setSymbol({index:index, bool:bool})),
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(home);
