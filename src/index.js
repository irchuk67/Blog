import React from "react";
import {createRoot} from 'react-dom/client';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)