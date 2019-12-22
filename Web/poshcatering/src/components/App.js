import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import { connect } from 'react-redux';

const handleSignIn = values => {
    console.log(values);
};

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact><Home/></Route>
                <Route path="/signin"><Form onSubmit={handleSignIn} variant="signin"/></Route>
                <Route path="/signup"><Form onSubmit={handleSignIn} variant="signup"/></Route>
            </BrowserRouter>
        </div>
    )
}

export default connect()(App);