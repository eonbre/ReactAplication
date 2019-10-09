import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers';

import saveAuthToken from '../middleware/saveAuthToken'
import APINotificationHandler from '../middleware/APINotificationHandler';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
        ReduxThunk,
        APINotificationHandler,
        saveAuthToken,
    )));

window.store = store;

export default store;