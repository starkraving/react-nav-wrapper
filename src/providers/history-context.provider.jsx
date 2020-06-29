import React, {createContext, useEffect, useState} from 'react';

const defaults = {
    history: '',
    historyChanged: false
};

export const HistoryContext = createContext({
    history: defaults.history,
    historyChanged: defaults.historyChanged,
    setHistory: () => {},
    setHistoryChanged: () => {}
});

const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState(defaults.history);
    const [historyChanged, setHistoryChanged] = useState(defaults.historyChanged);
    useEffect(() => {
        localStorage.setItem('history', history);
    }, [history]);

    useEffect(() => {
        const listener = setInterval(() => {
            const storedHistory = localStorage.getItem('history');
            if ( storedHistory && storedHistory !== history ) {
                setHistory(storedHistory);
                setHistoryChanged(true);
            }
        }, 100);
        return () => clearInterval(listener);
    });

    return (
        <HistoryContext.Provider value={{history, setHistory, historyChanged, setHistoryChanged}}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryProvider;