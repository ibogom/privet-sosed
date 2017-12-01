import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLoadingComplete, getPlatformData } from '../../reducers';

import './app.scss';

/** COMPONENTS **/
import { PreloaderContainer, ScrollContainer } from '../../containers';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (<div className="app-wrapper">
                {this.props.loaded ?
                 <ScrollContainer {...this.props}>{ this.props.children }</ScrollContainer> :
                 <PreloaderContainer preloaderType="letters" {...this.props}/>
                }
             </div>)
    }
};

function mapStateToProps (state) {
    return {
        menu: state.API.menu,
        loaded: isLoadingComplete(state),
        platform: getPlatformData()
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);