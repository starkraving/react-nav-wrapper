import React, {createContext, useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import App from "../App";

const defaults = {
    history: null,
};

export const HistoryContext = createContext({
    history: defaults.history,
    setHistory: () => {},
});

const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState(defaults.history);

    useEffect(() => {
        if (!history) return;
        console.log('history changed, passed in to App');
        ReactDOM.render(
            <App history={history}/>,
            document.getElementById('root')
        );
    }, [history]);

    return (
        <HistoryContext.Provider value={{history, setHistory}}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryProvider;