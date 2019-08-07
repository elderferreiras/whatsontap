import React from 'react';
import './App.scss';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
    return (
        <div className="App">
            <a className="menu-toggle rounded" href="#">
                <i className="fas fa-bars"/>
            </a>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <nav id="sidebar-wrapper" className="">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#page-top">Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <header className="masthead d-flex">
                <div className="container text-center">
                    <h1 className="mb-1">What's on tap?</h1>
                    <h3 className="mb-4">
                        <em>Search for a brewery and found out now.</em>
                    </h3>
                            <input type="text" name="brewery" className="col-lg-6 col-sm-12 col-md-8"
                                   placeholder="Type the name of a brewery or a local bar"/>
                </div>
                <div className="overlay"/>
            </header>
        </div>
    );
}

export default App;
