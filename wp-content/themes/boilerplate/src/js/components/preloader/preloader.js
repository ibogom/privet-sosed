import React from 'react';
import { PreloaderActions } from '../../actions';

import './preloader.scss';

const phrases = ['Загружаю','рисую разметку','ищу стройматериалы','звоню прорабам', 'еще чуть-чуть', 'добро пожаловать', 'на сайт', 'Привет сосед'];
const sentences = phrases.map(phrase => { return phrase.split('') });

export default class Preloader extends React.Component {

    state ={
        sentences: sentences,
        index: 0,
        isLastIndex: false,
        progressBar:0,
        activeIndexes: [],
        isLastAnimatedLetter: false
    };

    constructor(props) {
        super(props);
        this.getLetters = this.getLetters.bind(this);
        this.props.dispatch(PreloaderActions.startAnimation());
    }

    startAnimation(){
        let isLastLetter = this.state.activeIndexes.length -1 <= this.state.sentences[this.state.index].length;
        let isLastAnimatedLetter = this.state.activeIndexes.length -1 === this.state.sentences[this.state.index].length;
        let isLastSentence = this.state.index === this.state.sentences.length - 1;

        isLastLetter ? this.setALstActiveIndex(isLastAnimatedLetter) : this.setNextSentence(isLastSentence);
    }

    setALstActiveIndex(isLastAnimatedLetter){
        this.state.activeIndexes.push(this.state.activeIndexes.length);
        window.setTimeout(function () {
            this.setState({
                activeIndexes: this.state.activeIndexes,
                isLastAnimatedLetter: isLastAnimatedLetter
            });
        }.bind(this), isLastAnimatedLetter ? 250 : 100);
    }

    setNextSentence(isLastSentence){
        if(isLastSentence && this.state.isLastAnimatedLetter){
            this.props.dispatch(PreloaderActions.animationComplete());
        }

        if(!isLastSentence && this.state.isLastAnimatedLetter) {
            let progressBar = ((this.state.index + 1) * 50) / this.state.sentences.length;
            this.setState({
                index: this.state.index + 1,
                activeIndexes: [],
                progressBar: progressBar,
                isLastAnimatedLetter: false
            });
        }
    }

    getLetters(letter, i){
        return <div key={i} className={"letter "+ (this.state.activeIndexes[i] === i ? 'animate-vertical' : '')}>
                    { letter }
               </div>
    }

    render() {
        let letters = this.state.sentences[this.state.index].map(this.getLetters);
        let isLastSentence = this.state.index === this.state.sentences.length - 1;

        this.startAnimation();

        return (<div className={isLastSentence && this.state.isLastAnimatedLetter ? 'preloader animate-out' : 'preloader'}>
            <div className="content-wrapper">
                <div className="logo-content">
                    {letters}
                </div>
                <div className="progress-bar">
                    <div className="left-part" style={{
                        width: this.state.progressBar + '%'
                    }} />
                    <div className="right-part" style={{
                        width: this.state.progressBar  + '%'
                    }} />
                </div>
            </div>
        </div>)
    }
};