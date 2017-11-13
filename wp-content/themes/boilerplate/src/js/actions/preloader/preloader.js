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

export function setProgressBar(props) {
    let progressBar = ((props.index + 1) * 50) / props.sentences.length;
    return {
        type: preloaderTypes.SET_PROGRESS_BAR,
        progressBar: progressBar,
    }
}

export { setActiveLetters, setSentence } from './letters/letters';