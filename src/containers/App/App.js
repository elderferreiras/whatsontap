import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../../components/Home/Home';
import './App.scss';
import asyncComponent from '../../hoc/AsyncComponent/AsyncComponent';

const asyncSearch = asyncComponent(() => {
    return import('../../containers/Search/Search');
});

const asyncContact = asyncComponent(() => {
    return import('../../components/Contact/Contact');
});

const asyncAbout = asyncComponent(() => {
    return import('../../components/About/About');
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={asyncAbout} exact/>
                <Route path="/contact" component={asyncContact} exact/>
                <Route path="/search" component={asyncSearch} exact/>
            </div>
        );
    }
}

export default App;