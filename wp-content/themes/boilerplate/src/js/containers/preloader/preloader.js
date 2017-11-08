import React from "react";
import {connect} from 'react-redux';
import { AppActions } from '../../actions';

/** COMPONENTS **/
import {Preloader} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    preloader: state.preloader.loaded
});

const PreloaderContainer = connect(mapStateToProps)(Preloader);

export default PreloaderContainer;