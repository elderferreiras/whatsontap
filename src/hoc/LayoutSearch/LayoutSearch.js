import React, {Component} from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import './LayoutSearch.scss';

class LayoutSearch extends Component {
    render() {
        return (
            <div className="LayoutSearch">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default LayoutSearch;