import React, {Component} from "react";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import "../../css/menu.css";

class ElfHeader extends Component {
    
    render() {
        return (
            <div className='App'>
                <ul className='elfMenu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/get-foo'>Foo</Link></li>
                    <li><Link to='/get-numbers'>Numbers</Link></li>
                    <li><Link to='/get-gist'>Insert New Gist</Link></li>
                    <li><Link to='/get-list'>Gist Lister</Link></li>
                </ul>
                
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Git Explorer</h2>
                </div>
            </div>
        );
    }
}

export default ElfHeader;