import * as sliderTypes from './sliderTypes';

export function setActiveSlide(activeSlide) {
    return {
        type: sliderTypes.SET_ACTIVE_SLIDE,
        activeSlide
    }
};

export function getSlides() {
    return {
        type: sliderTypes.GET_SLIDES
    }
};