import React from "react";
import {connect} from 'react-redux';

/** COMPONENTS **/
import {Preloader} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    index: state.preloader.index,
    sentences: state.preloader.sentences,
    activeLetters: state.preloader.activeLetters,
    progressBar: state.preloader.progressBar,
    isLastAnimatedLetter: state.preloader.isLastAnimatedLetter
});

const PreloaderContainer = connect(mapStateToProps)(Preloader);

export default PreloaderContainer;