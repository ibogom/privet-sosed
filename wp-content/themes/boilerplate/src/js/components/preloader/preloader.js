import React from 'react';

import './preloader.scss';

const frazes = ['Загружаю','Строю масштаб','Добро пожаловать на сайт', 'Привет','сосед'];
const sentences = frazes.map(fraze => { return fraze.split('') });

export default class Preloader extends React.Component {

    constructor(props) {
        super(props);

        this.getLetters = this.getLetters.bind(this);

        this.state = {
            sentences: sentences,
            index: 0,
            progressBar:0,
            activeIndexes: []
        }
    }

    componentDidUpdate(){
        if(this.state.activeIndexes.length -1 !== this.state.sentences[this.state.index].length -1) {
            this.state.activeIndexes.push(this.state.activeIndexes.length);
            window.setTimeout(function () {
                this.setState({
                    activeIndexes: this.state.activeIndexes
                });
            }.bind(this), 300);
        } else {
            if(this.state.index !== this.state.sentences.length -1){
                let progressBar = ((this.state.index + 1) * 50) / this.state.sentences.length;
                this.setState({
                    index: this.state.index + 1,
                    activeIndexes: [],
                    progressBar: progressBar
                });
            }
        }
    }

    getLetters(letter, i){
        return <div key={i} className={"letter "+ (this.state.activeIndexes[i] === i ? 'animate-vertical' : '')}>
                    { letter }
               </div>
    }

    render() {

        let letters = this.state.sentences[this.state.index].map(this.getLetters);

        return (<div className="preloader">
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