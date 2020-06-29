import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import NavWrapper from "./components/nav-wrapper/nav-wrapper.component";
import HistoryProvider from "./providers/history-context.provider";

ReactDOM.render(
    <React.StrictMode>
        <HistoryProvider>
            <NavWrapper innerContent={document.getElementById('nav').innerHTML} />
        </HistoryProvider>
    </React.StrictMode>,
    document.getElementById('nav')
);

ReactDOM.render(
    <React.StrictMode>
            <HistoryProvider>
                <BrowserRouter>
                    <hr />
                    <p>I am a completely separate React app loaded on the same page</p>
                    <App />
                </BrowserRouter>
            </HistoryProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
