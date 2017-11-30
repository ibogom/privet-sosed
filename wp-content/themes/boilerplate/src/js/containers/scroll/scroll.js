import React from "react";
import {connect} from 'react-redux';

/** COMPONENTS **/
import {Scroll} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    scroll: state.scroll,
});

const ScrollContainer = connect(mapStateToProps)(Scroll);

export default ScrollContainer;