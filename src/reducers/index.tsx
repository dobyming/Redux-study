import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos'
import posts from './posts';

const rootReducer = combineReducers({
    todos,
    counter,
    posts
}); //reducer 합치기 

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>; //useSelector state에 제공