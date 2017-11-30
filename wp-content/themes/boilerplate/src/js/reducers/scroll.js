import { scrollTypes } from '../actions';

const defaultState = {
    delta: window.innerHeight - 250,
    top: 0,
    left: 0
};

const scroll = (state = defaultState, action) => {
    switch (action.type) {
        case scrollTypes.UPDATE_SCROLL:
            return Object.assign({}, state, {
                scroll: action.scroll
            });
        default:
            return state;
    }
};

export default scroll;