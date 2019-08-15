import React, {Component} from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import './LayoutHome.scss';

class LayoutHome extends Component {
    render() {
        return (
            <div className="LayoutHome">
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

export default LayoutHome;