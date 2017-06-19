import React, {Component} from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ExplorerMenu extends Component {

    render() {
        return (
            <Navbar fixedTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><a href='/'>Git Explorer</a></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/get-foo'><NavItem>Get Foo</NavItem></LinkContainer>
                        <LinkContainer to='/you-rang'><NavItem>You Rang?</NavItem></LinkContainer>
                        <LinkContainer to='/get-user'><NavItem>Get Git User</NavItem></LinkContainer>
                        <LinkContainer to='/get-numbers'><NavItem>Numbers</NavItem></LinkContainer>
                        <NavDropdown title='Gists' id='basic-nav-gist'>
                            <LinkContainer to='/get-gist'><MenuItem>Insert New Gist</MenuItem></LinkContainer>
                            <LinkContainer to='/get-list'><MenuItem>Gist Lister</MenuItem></LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default ExplorerMenu;
