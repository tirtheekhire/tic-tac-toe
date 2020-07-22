import React from 'react';
// import logo from '../logo.svg';
import './css/style.css';
import PlayerComponent from "./components/PlayerComponent.js";
import Game from "./components/Game.js";
import Timer from "./components/Timer";

function home() {
  return (
    <body>
      <div className="App">
        <div className="playerContainer">
          <PlayerComponent name="Player 1"/>
          <button class="startButton" onClick="">Start</button>
          <PlayerComponent name="Player 2"/>
        </div>
        <div class="timerDiv">
          <Timer time="4"/>
          <div class="gameDiv">
            <Game/>
          </div>
          <Timer time="0"/>
        </div>
        <p>Player 1 win !</p>
      </div>
    </body>
  );
}

export default home;
