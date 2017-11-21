import React from 'react';
import PropTypes from 'prop-types';

import './slider.scss';

export default class Slider extends React.Component {

    static propTypes = {
        slides: PropTypes.array.isRequired
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.renderSlidesText = this.renderSlidesText.bind(this);
        this.renderSlideImages = this.renderSlideImages.bind(this);
    }

    renderSlidesText() {
        return this.props.slides.map((slide, i) => {
            return <li key={i} className="slider-text">
                <span className="text">{slide.text}</span>
            </li>
        });
    }

    renderSlideImages() {
        return this.props.slides.map((slide, i) => {
            return <li key={i} className="slider-image" style={{backgroundImage: 'url( ' + slide.img + ')'}}>
            </li>
        });
    }

    render() {
        return (<div className="slider">
            <div className="slider-content-wrapper">
                <div className="slider-left-section">
                    <ul className="slider-text-wrapper">
                        {this.renderSlidesText()}
                    </ul>
                </div>
                <div className="slider-right-section">
                    <ul className="slider-images-wrapper">
                        {this.renderSlideImages()}
                    </ul>
                </div>
            </div>
        </div>)
    }
};