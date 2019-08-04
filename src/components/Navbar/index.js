import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import { Content } from './styles';

const NavigationBar = () => (
    <Content>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand><Link to="/">Centro Holistico Vida Feliz</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/sobre"> Sobre </Link></Nav.Item>
                    <Nav.Item><Link to="/profissional"> Profissional </Link></Nav.Item>
                    <Nav.Item><Link to="/tecnicas"> Técnicas </Link></Nav.Item>
                    <Nav.Item><Link to="/contato"> Contato </Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Content>
);

export default NavigationBar;
