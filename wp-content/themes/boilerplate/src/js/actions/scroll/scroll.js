import * as scrollTypes from './scrollTypes';

export function updateScroll(scroll) {
    return {
        type: scrollTypes.UPDATE_SCROLL,
        scroll
    }
};