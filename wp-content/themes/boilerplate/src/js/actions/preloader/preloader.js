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

export function setActiveLetters(props, isLastAnimatedLetter) {
    props.activeLetters.push(props.activeLetters.length);
    return {
        type: preloaderTypes.SET_ACTIVE_LETTERS,
        activeLetters: props.activeLetters,
        isLastAnimatedLetter: isLastAnimatedLetter
    }
};

export function setSentence(props) {
    let progressBar = ((props.index + 1) * 50) / props.sentences.length;
    return {
        type: preloaderTypes.SET_SENTENCE,
        index: props.index + 1,
        activeLetters: [],
        progressBar: progressBar,
        isLastAnimatedLetter: false
    }
}

export function setProgressBar(props) {
    let progressBar = ((props.index + 1) * 50) / props.sentences.length;
    return {
        type: preloaderTypes.SET_PROGRESS_BAR,
        progressBar: progressBar,
    }
}