import { preloaderTypes } from '../actions';

const defaultState = {
    loaded: false
};

const preloader = (state = defaultState, action) => {
    switch (action.type) {
        case preloaderTypes.START_ANIMATION:
            return {
                loaded: false
            };
        case preloaderTypes.ANIMATION_COMPLETE:
            return {
                loaded: true,
            };
        default:
            return state;
    }
};

export default preloader;