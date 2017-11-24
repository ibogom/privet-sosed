import React from 'react';
import PropTypes from 'prop-types';

import './slider.scss';

import Slides from './slides/slides';
import Bullets from './bullets/bullets';
import Description from './description/description';

export default class Slider extends React.Component {

    static propTypes = {
        slides: PropTypes.array.isRequired,
        activeSlide: PropTypes.number.isRequired,
        interval: PropTypes.number.isRequired
    };

    componentDidMount() {
        this.startAnimation();
    }

    componentDidUpdate() {
        this.startAnimation();
    }

    startAnimation() {
        this.animationTimeout && window.clearTimeout(this.animationTimeout);
        this.animationTimeout = window.setTimeout(function () {
            let activeSlide = this.props.activeSlide !== this.props.slides.length - 1 ? this.props.activeSlide + 1 : 0;
            this.props.setActiveSlide(activeSlide);
        }.bind(this), this.props.interval);
    }

    render() {
        return (<div className="slider">
            <div className="slider-content-wrapper">
                <div className="slider-left-section">
                    <Description {...this.props} />
                </div>
                <div className="slider-right-section">
                    <Slides {...this.props} />
                </div>
            </div>
            <Bullets {...this.props} />
        </div>)
    }
};