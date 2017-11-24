import React from 'react';

import './slides.scss';

export default class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.renderSlideImages = this.renderSlideImages.bind(this);
    }

    renderSlideImages(){
        return this.props.slides.map((slide, i) => {
            return <li key={i} className='slider-image' style={{ backgroundImage: 'url( ' + slide.img + ')' }} />
        });
    }

    render(){
            return (<ul className="slider-images-wrapper" style={{
                'WebkitTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
                'MozTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
                'msTransform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)',
                'transform': 'translate3d(0, -' + this.props.activeSlide * 100 + '%, 0)'
            }}>
                    {this.renderSlideImages()}
                </ul>)
    }
};