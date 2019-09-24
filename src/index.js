import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

export const history = createBrowserHistory()

let store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(routerMiddleware(history), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>
, document.getElementById('root'));
