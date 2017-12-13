import { combineReducers } from 'redux';
import counter from './counter';
import navs from './expandSide';
import sides, * as fromSides from './sides';

export default combineReducers({
    counter,
    navs,
    sides,
});

export const getSide = (state, index) => fromSides.getSide(state.sides, index);
