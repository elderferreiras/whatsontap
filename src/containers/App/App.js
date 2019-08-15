import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../../components/Home/Home";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Search from "../../containers/Search/Search";

import './App.scss';

function App() {
    return (
        <div className="App">
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/search" component={Search} exact/>
        </div>
    );
}

export default App;
