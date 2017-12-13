import * as types from '../constants/ActionTypes';
import side from '../../api/side';

export const increment = () => ({
    type: types.INCREMENT
});

const receiveSides = sides => ({
    type: types.RECEIVE_SIDES,
    sides
});

export const getSide = () => dispatch => {
    side.getSides(sides => {
        dispatch(receiveSides(sides));
    });
};

export const expandSide = index => ({
    type: types.EXPANDSIDE,
    index
});
