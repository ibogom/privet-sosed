import { preloaderTypes } from '../actions';

const phrases = ['Загружаю','рисую разметку','ищу стройматериалы','звоню прорабам', 'еще чуть-чуть', 'добро пожаловать', 'на сайт', 'Привет сосед'];
const sentences = phrases.map(phrase => { return phrase.split('') });

const defaultState = {
    loaded: false,
    sentences: sentences,
    isLastIndex: false,
    progressBar: 0,
    index: 0,
    activeLetters: [],
    isLastAnimatedLetter: false
};

const preloader = (state = defaultState, action) => {
    switch (action.type) {
        case preloaderTypes.START_ANIMATION:
            return Object.assign({}, state, {
                loaded: false
            });
        case preloaderTypes.SET_SENTENCE:
            return Object.assign({}, state, {
                index: action.index,
                activeLetters: action.activeLetters,
                progressBar: action.progressBar,
                isLastAnimatedLetter: action.isLastAnimatedLetter
            });
        case preloaderTypes.SET_ACTIVE_LETTERS:
            return Object.assign({}, state, {
                activeLetters: action.activeLetters,
                isLastAnimatedLetter: action.isLastAnimatedLetter
            });
        case preloaderTypes.ANIMATION_COMPLETE:
            return Object.assign({}, state, {
                loaded: true,
            });
        default:
            return state;
    }
};

export default preloader;