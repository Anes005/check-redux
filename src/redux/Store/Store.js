import {createStore} from 'react';
import rootReducer from '../Reducers';

export default createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())