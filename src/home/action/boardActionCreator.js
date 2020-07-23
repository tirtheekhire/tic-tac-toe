import {SET_SYMBOL, RESET_GAME} from "./actionTypes.js";

export const setSymbol = (payload) => {
    return {
        type: SET_SYMBOL,
        payload
    };
}