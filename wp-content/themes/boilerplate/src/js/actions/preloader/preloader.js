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

export function setActiveLetters(activeLetters, isLastAnimatedLetter) {
    activeLetters.push(activeLetters.length);
    return {
        type: preloaderTypes.SET_ACTIVE_LETTERS,
        activeLetters: activeLetters,
        isLastAnimatedLetter: isLastAnimatedLetter
    }
};

export function setSentence(index, progressBar) {
    return {
        type: preloaderTypes.SET_SENTENCE,
        index: index + 1,
        activeLetters: [],
        progressBar: progressBar,
        isLastAnimatedLetter: false
    }
}