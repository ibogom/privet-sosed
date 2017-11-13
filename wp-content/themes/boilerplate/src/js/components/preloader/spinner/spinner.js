import React from 'react';
import { PreloaderActions } from '../../../actions';

import './spinner.scss';

export default class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.animationComplete = this.animationComplete.bind(this);
        this.props.dispatch(PreloaderActions.startAnimation());
    }

    componentDidMount(){
        window.setTimeout(this.animationComplete, 3000);
    }

    animationComplete(){
        this.props.dispatch(PreloaderActions.animationComplete());
    }

    render(){
        return (<div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
        </div>)
    }
};