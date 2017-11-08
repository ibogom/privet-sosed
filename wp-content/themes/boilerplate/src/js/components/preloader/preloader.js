import React from 'react';
import { PreloaderActions } from '../../actions';

import './preloader.scss';

export default class Preloader extends React.Component {

    constructor(props) {
        super(props);
        this.getLetters = this.getLetters.bind(this);
        this.props.dispatch(PreloaderActions.startAnimation());
    }

    componentDidUpdate(){
        let isLastLetter = this.props.activeLetters.length -1 <= this.props.sentences[this.props.index].length;
        let isLastAnimatedLetter = this.props.activeLetters.length -1 === this.props.sentences[this.props.index].length;
        let isLastSentence = this.props.index === this.props.sentences.length - 1;

        isLastLetter ? this.setLastActiveIndex(isLastAnimatedLetter) : this.setNextSentence(isLastSentence);

    }

    setLastActiveIndex(isLastAnimatedLetter){
        window.setTimeout(function () {
            this.props.dispatch(PreloaderActions.setActiveLetters(this.props, isLastAnimatedLetter));
        }.bind(this), isLastAnimatedLetter ? 350 : 100);
    }

    setNextSentence(isLastSentence){
        if(isLastSentence && this.props.isLastAnimatedLetter){
            window.setTimeout(function () {
                this.props.dispatch(PreloaderActions.animationComplete());
            }.bind(this), 800);
        }

        if(!isLastSentence && this.props.isLastAnimatedLetter) {
            this.props.dispatch(PreloaderActions.setSentence(this.props));
        }
    }

    getLetters(letter, i){
        return <div key={i} className={"letter "+ (this.props.activeLetters[i] === i ? 'animate-vertical' : '')}>
                    { letter }
               </div>
    }

    render() {
        let letters = this.props.sentences[this.props.index].map(this.getLetters);
        let isLastSentence = this.props.index === this.props.sentences.length - 1;

        return (<div className={"preloader" + (isLastSentence && this.props.isLastAnimatedLetter ? " animate-out" : "") }>
            <div className="content-wrapper">
                <div className="logo-content">
                    {letters}
                </div>
                <div className="progress-bar">
                    <div className="left-part" style={{
                        width: this.props.progressBar + '%'
                    }} />
                    <div className="right-part" style={{
                        width: this.props.progressBar  + '%'
                    }} />
                </div>
            </div>
        </div>)
    }
};