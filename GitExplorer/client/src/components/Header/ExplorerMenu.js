import React, {Component} from "react";
//import {Link} from "react-router-dom";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "../../css/menu.css";

class ExplorerMenu extends Component {
    
    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>Git Explorer</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Get Git User</NavItem></LinkContainer>
                        <LinkContainer to='/get-foo'><NavItem>Get Foo</NavItem></LinkContainer>
                        <LinkContainer to='/get-numbers'><NavItem>Numbers</NavItem></LinkContainer>
                        <NavDropdown eventKey={3} title='Gists' id='basic-nav-gist'>
                            <MenuItem eventKey={3.1} href='/get-gist'>Insert New Gist</MenuItem>
                            <MenuItem eventKey={3.2} href='/get-list'>Gist Lister</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}

export default ExplorerMenu;