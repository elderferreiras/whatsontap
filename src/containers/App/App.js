import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from "../../components/Home/Home";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Search from "../../containers/Search/Search";
import SignIn from "../../components/SignIn/SignIn";
import './App.scss';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/search" component={Search} exact/>
                <Route path="/sign-in" component={SignIn} exact/>
            </div>
        );
    }
}

export default App;