import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import "../../css/menu.css";

class ElfHeader extends Component {
    
    render() {
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