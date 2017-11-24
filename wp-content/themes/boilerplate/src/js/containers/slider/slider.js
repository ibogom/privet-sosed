import React from "react";
import {connect} from 'react-redux';
import { SliderActions } from '../../actions';
/** COMPONENTS **/
import {Slider} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    slides: state.slider.slides,
    activeSlide: state.slider.activeSlide,
    interval: state.slider.interval
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (e) => {
        let activeSlide = Number(e.currentTarget.dataset.slide);
        dispatch(SliderActions.setActiveSlide(activeSlide));
    },
    setActiveSlide: (activeSlide) => {
        dispatch(SliderActions.setActiveSlide(activeSlide));
    }
});

const SliderContainer = connect(mapStateToProps, mapDispatchToProps)(Slider);

export default SliderContainer;