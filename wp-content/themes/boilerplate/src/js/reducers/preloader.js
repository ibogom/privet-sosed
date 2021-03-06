import { preloaderTypes } from '../actions';
import Parser from 'ua-parser-js';

const desktopPhrases = ['Загружаю', 'рисую разметку', 'ищу стройматериалы', 'все готово', 'Привет сосед'];
const mobilePhrases = ['Загружаю', 'рисую', 'анимирую', 'все готово', 'Привет сосед'];

let platform = Parser(window.navigator.userAgent);
const sentences =[];
function getLetter(phrase) {
    return  sentences.push(phrase.split(''));
}

platform.device.type === 'mobile' ? mobilePhrases.forEach(getLetter) : desktopPhrases.forEach(getLetter);

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
        case preloaderTypes.SET_PROGRESS_BAR:
            return Object.assign({}, state, {
                progressBar: action.progressBar
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