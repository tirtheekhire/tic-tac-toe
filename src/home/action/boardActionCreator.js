import {SET_SYMBOL, RESET_GAME} from "./actionTypes";

export const setSymbol = (payload) => {
    return {
        type: SET_SYMBOL,
        payload
    };
}

export const resetGame = () => {
    return {
        type: RESET_GAME,
    };
}