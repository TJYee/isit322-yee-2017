import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Jumbotron} from "react-bootstrap";
import logo from "../../images/logo.png";
import "../../css/menu.css";

class ElfHeader extends Component {
    
    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>CongressAddress</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer this.state.index to='/'><NavItem>Address Show</NavItem></LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div className='App'>
                <ul className='menu'>
                    <li className='menu'><Link to='/'>Home</Link></li>
                    <li className='menu'><Link to='/get-foo'>Foo</Link></li>
                    <li className='menu'><Link to='/get-numbers'>Numbers</Link></li>
                    <li className='menu'><Link to='/get-gist'>Insert New Gist</Link></li>
                    <li className='menu'><Link to='/get-list'>Gist Lister</Link></li>
                </ul>
                <Jumbotron>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo'/>
                        <h2>Git Explorer</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;