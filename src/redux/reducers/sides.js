import { combineReducers } from 'redux';
import { RECEIVE_SIDES, SWITCH_SIDES } from '../constants/ActionTypes';

const sides = (state, action) => {
    switch (action.type) {
        case SWITCH_SIDES:
            return {
                ...state,
                inventory: state.inventory - 1,
            };
        default:
            return state;
    }
};
const byIndex = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SIDES:
            return {
                ...state,
                ...action.sides.reduce((obj, side) => {
                    obj[ side.index ] = side;
                    return obj;
                }, {}),
            };
        default:
            const { index } = action;
            if (index) {
                return {
                    ...state,
                    [index]: sides(state[ index ], action),
                };
            }
            return state;
    }
};

export default combineReducers({
    byIndex,
});

export const getSide = (state, index) => {
    return state.byIndex[ index ];
};
