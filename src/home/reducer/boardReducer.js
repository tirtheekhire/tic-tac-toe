import * as types from '../action/actionTypes';

const initialState = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
    turn: true,    // true ==> X,   false ===> O
    winner: 'n'
};

const newBoard=[
    '', '', '',
    '', '', '',
    '', '', ''
];

export const tictactoe = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SYMBOL:
            console.log('action inside reducer ===>', action)
            if (action.payload.bool) {
                newBoard[action.payload.index] = "O";
                // newBoard[action.index] = action.symbol;
                return {
                    ...state,
                    board: newBoard,
                    turnValue: action.payload.bool === true ? false : true,
                    // winner: checkWinner(newBoard)
                };
            }else{
                newBoard[action.payload.index] = "X";
                // newBoard[action.index] = action.symbol;
                return {
                    ...state,
                    board: newBoard,
                    turnValue: action.payload.bool === true ? false : true,
                    // winner: checkWinner(newBoard)
                };
            }
            // return state;?
            // return {
            //     turnValue: action.payload.bool === true ? false : true,
                
            // }
            // console.log('symbol set')
        case types.RESET_GAME:
            return {
                ...initialState
            };
        default:
            return state;
    }
}