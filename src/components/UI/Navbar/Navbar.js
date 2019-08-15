import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const navbar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">What's on tap?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default navbar;