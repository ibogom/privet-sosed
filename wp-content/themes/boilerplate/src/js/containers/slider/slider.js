import React from "react";
import {connect} from 'react-redux';

/** COMPONENTS **/
import {Slider} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    slides: state.slider.slides
});

const SliderContainer = connect(mapStateToProps)(Slider);

export default SliderContainer;