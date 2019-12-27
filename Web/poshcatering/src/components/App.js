import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './Home/NavBar';
import Home from './Home';
import Form from './Form';
import Explore from './Explore';
import axios from 'axios';
import Dashboard from './Dashboard';
import Partner from './Partner';
import { connect } from 'react-redux';
import {currentUser} from '../actions';
import {navBar} from '../constants'

const handleSignIn = (values, currentUser, link = 'users') => {
    var url = `http://localhost:4000/${link}`;
    if(values.name){
        url += '/signup';
    }
    else{
        url += '/signin';
    }
    axios.post(url,values).then((res)=> {
        currentUser({email: values.email});
    }).catch((err) => {
        console.log("Error",err);
    })
};

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <NavBar content={navBar}/>
                <Route path="/" exact><Home /></Route>
                <Route path="/partner/:id" exact render={(props)=><Partner {...props}/>}/>
                <Route path='/explore' exact render={(props)=><Explore {...props}/>}/>
                <Route path="/signin" render={(props)=><Form onSubmit={(values)=> handleSignIn(values)} variant="signin" {...props}/>}/>
                <Route path="/signup" render={(props)=><Form onSubmit={(values)=> handleSignIn(values)} variant="signup" {...props}/>}/>
                <Route path="/partners/signin" exact render={(props)=><Form onSubmit={(values)=> handleSignIn(values,'partners')} variant="signin" heading="Partners Portal" {...props}/>}/>
                <Route path="/partners/signup" exact render={(props)=><Form onSubmit={(values)=> handleSignIn(values,'partners')} variant="signup" heading="Partners Portal" {...props}/>}/>
                <Route path="/dashboard" render={(props)=><Dashboard {...props}/>}/>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        form: state.form
    };
}
export default connect(mapStateToProps, {currentUser})(App);