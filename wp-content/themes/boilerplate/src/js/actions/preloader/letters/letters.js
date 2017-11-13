import * as lettersTypes from './lettersTypes';

export function setActiveLetters(props, isLastAnimatedLetter) {
    props.activeLetters.push(props.activeLetters.length);
    return {
        type: lettersTypes.SET_ACTIVE_LETTERS,
        activeLetters: props.activeLetters,
        isLastAnimatedLetter: isLastAnimatedLetter
    }
};

export function setSentence(props) {
    let progressBar = ((props.index + 1) * 50) / props.sentences.length;
    return {
        type: lettersTypes.SET_SENTENCE,
        index: props.index + 1,
        activeLetters: [],
        progressBar: progressBar,
        isLastAnimatedLetter: false
    }
};