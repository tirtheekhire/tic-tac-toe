import React from 'react';
import "../css/style.css";

function Game() {
    return (
        <table>
            <tr>
                <td>X</td>
                <td>0</td>
                <td></td>
            </tr>
            <tr>
                <td>0</td>
                <td>X</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>X</td>
            </tr>
        </table>
    );
  }
  
  export default Game;