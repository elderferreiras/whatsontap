import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">What's on tap?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default navbar;