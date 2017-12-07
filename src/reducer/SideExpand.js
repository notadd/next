import { EXPAND_SIDE } from '../action';
import side from '../api/side.json';

const defaultState = {
    side: side,
};

export default (previousState = defaultState, { type, index }) => {
    switch (type) {
        case EXPAND_SIDE:
            const side = Object.assign(previousState, 'side');
            side[index].open = !side[index].open;
            return {
                ...previousState,
                side: side,
            };
        default:
            return previousState;
    }
};
