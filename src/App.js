import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import FooBar from "./components/foo-bar/foo-bar.component";
import BazBong from "./components/baz-bong/baz-bong.component";

const App = ({history = null}) => {
    return (
        <React.StrictMode>
                <BrowserRouter>
                    {
                        ( history )
                            ? <Redirect to={history}/>
                            : ''
                    }
                    <hr />
                    <p>I am a completely separate React app loaded on the same page</p>
                    <Switch>
                        <Route path='/foo/bar' exact component={FooBar}/>
                        <Route path='/baz/bong' exact component={BazBong}/>
                        <Route path='*'
                               render={({location}) => {
                                   if ( history ) {
                                       // this is not a React route
                                       window.location.href = history;
                                       return null;
                                   }
                                   return (
                                   <div className='catch_all'><h2>No Match</h2><p>I caught the {location.pathname} route</p></div>
                               );
                               }}/>
                    </Switch>
                </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;
