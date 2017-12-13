import { EXPANDSIDE } from '../constants/ActionTypes';
import sides from '../../assets/js/side';

const initialState = {
    navs: sides,
};

export default function expandSide(state = initialState, action) {
    switch (action.type) {
        case EXPANDSIDE:
            return state.map(expand => (expand.index === action.index)
                ? { ...expand, open: !expand.open }
                : expand
            );
        default:
            return state;
    }
};
