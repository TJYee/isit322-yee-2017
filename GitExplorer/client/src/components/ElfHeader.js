import React, { Component } from 'react';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import numbersInit from './numbers-data';
import SmallNumbers from './SmallNumbers';
import logo from '../images/logo.png';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/menu.css';

class ElfHeader extends Component {

    render() {
        return (
            <Router>
                <div className="App">

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/get-foo">Foo</Link></li>
                        <li><Link to="/get-numbers">Numbers</Link></li>
                    </ul>

                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>

                    <Route exact path="/" component={GetUserInfo}/>
                    <Route exact path="/get-foo" component={GetFoo}/>
                    <Route path="/get-numbers"
                           render={(props) => (
                               <SmallNumbers {...props}
                                             numbers={numbersInit} />
                           )}
                    />
                </div>
            </Router>
        );
    }
}

export default ElfHeader;