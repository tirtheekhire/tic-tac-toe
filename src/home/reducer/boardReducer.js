import * as types from '../action/actionTypes';
import { winnerCalculation } from '../../utiities/winnerCalculation';
import _ from 'lodash';

const initialState = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
    turn: true,    // true ==> X,   false ===> O
    winner: 'n'
};

export const tictactoe = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SYMBOL:
            if (!state.board[action.payload.index] && state.winner === 'n') {
                const newBoard = _.cloneDeep(state.board);
                newBoard[action.payload.index] = action.payload.bool ? "X" : "O";
                return {
                    ...state,
                    board: newBoard,
                    turnValue: action.payload.bool === true ? false : true,
                    winner: winnerCalculation(newBoard)
                };
            }
        case types.RESET_GAME:
            return {
                ...initialState
            };
        default:
            return state;
    }
}