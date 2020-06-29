import React, {useContext, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import FooBar from "./components/foo-bar/foo-bar.component";
import BazBong from "./components/baz-bong/baz-bong.component";
import {HistoryContext} from "./providers/history-context.provider";
import {useHistory} from "react-router";

const App = () => {
    const { history, historyChanged, setHistoryChanged } = useContext(HistoryContext);
    const browserHistory = useHistory();
    useEffect(() => {
        if ( historyChanged ) {
            console.log('route change!');
            browserHistory.push(history);
            setHistoryChanged(false);
        }
    }, [history, historyChanged, setHistoryChanged, browserHistory]);
    return (
        <Switch>
            <Route path='/foo/bar' exact component={FooBar}/>
            <Route path='/baz/bong' exact component={BazBong}/>
            <Route path='*'
                   render={({location}) => { return (
                       <div className='catch_all'><h2>No Match</h2><p>I caught the {location.pathname} route</p></div>
                   ); }}/>
        </Switch>
    );
};

export default App;
