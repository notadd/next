import { EXPAND_SIDE } from '../action';
import side from '../api/side.json';

const defaultState = {
    side: side,
};

export default (previousState = defaultState, { type, index }) => {
    switch (type) {
        case EXPAND_SIDE:
            return {
                ...previousState,
                side[index].open: !side[index].open,
            };
        default:
            return previousState;
    }
};
