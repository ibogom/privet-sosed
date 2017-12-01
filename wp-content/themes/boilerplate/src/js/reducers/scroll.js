import { scrollTypes } from '../actions';

const defaultState = {
    delta: window.innerHeight - 150,
    top: 0,
    left: 0
};

const scroll = (state = defaultState, action) => {
    switch (action.type) {
        case scrollTypes.UPDATE_SCROLL:
            return Object.assign({}, state, {
                top: action.scroll.top,
                left: action.scroll.left
            });
        default:
            return state;
    }
};

export default scroll;