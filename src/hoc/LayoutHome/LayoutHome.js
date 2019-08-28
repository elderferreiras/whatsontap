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
                <footer className="footer text-center">
                    <div className="container">
                        <p className="text-muted small mb-0">Copyright © What's on tap? 2019</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LayoutHome;