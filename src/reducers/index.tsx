import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos'

const rootReducer = combineReducers({
    todos,
    counter
}); //reducer 합치기 

export default rootReducer;