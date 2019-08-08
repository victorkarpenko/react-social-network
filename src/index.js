import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let renderApp = (state) =>{
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
};

store.subscribe(() => {
    let state = store.getState();
    renderApp(state);
});

renderApp(store.getState());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();