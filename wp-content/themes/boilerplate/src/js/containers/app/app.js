import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLoadingComplete } from '../../reducers';

import './app.scss';

/** COMPONENTS **/
import { PreloaderContainer } from '../../containers';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (<div className="app-wrapper">
                { this.props.loaded ? this.props.children : <PreloaderContainer {...this.props}/>  }
             </div>)
    }
};

function mapStateToProps (state) {
    return {
        menu: state.API.menu,
        pages: state.API.pages,
        posts: state.API.posts,
        preloader: state.preloader,
        loaded: isLoadingComplete(state)
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);