import React from 'react';

import './description.scss';

export default class Description extends React.Component {

    constructor(props) {
        super(props);
        this.renderSlidesDescription = this.renderSlidesDescription.bind(this);
    }

    renderSlidesDescription(){
        return this.props.slides.map((slide, i) => {
            return <li key={i} className='slider-text'>
                <span className="text">{slide.text}</span>
            </li>
        });
    }

    render(){
        return ( <ul className="slider-descriptions-wrapper" style={{
            'WebkitTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
            'MozTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
            'msTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
            'transform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)'
        }}>
            {this.renderSlidesDescription()}
        </ul>)
    }
};