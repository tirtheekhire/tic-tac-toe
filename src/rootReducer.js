import { combineReducers } from 'redux';
import { tictactoe } from './home/reducer/boardReducer';

export const rootReducer = combineReducers({
    // all reducers goes here.
    tictactoe
});