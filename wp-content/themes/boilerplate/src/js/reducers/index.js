import { combineReducers } from 'redux';
import routes from './routes';
import initial from './initial';
import app from './app';
import preloader from './preloader';
import API from './api/';

import Parser from 'ua-parser-js';

const AppReducers = combineReducers({
    routes,
    initial,
    preloader,
    app,
    API
});

export function isLoadingComplete(state) {
    return (state.API.menus.loaded && state.API.pages.loaded && state.API.menuItems.length && state.preloader.loaded)
        || state.initial.loaded && state.preloader.loaded;
}

export function getPlatformData() {
    return Parser(window.navigator.userAgent);
}

export default AppReducers