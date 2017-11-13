import React from 'react';
import Letters from './letters/letters';
import Spinner from './spinner/spinner';

import './preloader.scss';

export default class Preloader extends React.Component {

    constructor(props) {
        super(props);
        this.getPreloaderType = this.getPreloaderType.bind(this);
    }

    getPreloaderType(){
        switch (this.props.preloaderType){
            case 'letters':
                return <Letters {...this.props}/>;
                break;
            case 'spinner':
                return <Spinner {...this.props}/>;
                break;
            default:
                return <Letters {...this.props}/>;
                break;
        }
    }

    render() {
        return (<div className="preloader">
            {this.getPreloaderType()}
        </div>)
    }
};