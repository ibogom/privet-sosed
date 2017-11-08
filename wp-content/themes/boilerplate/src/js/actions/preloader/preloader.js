import * as preloaderTypes from './preloaderTypes';

export function startAnimation() {
    return {
        type: preloaderTypes.START_ANIMATION
    }
};

export function animationComplete() {
    return {
        type: preloaderTypes.ANIMATION_COMPLETE
    }
};