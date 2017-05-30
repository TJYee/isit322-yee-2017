import React, {Component} from "react";
import logo from "../../images/logo.png";
import "../../css/menu.css";

class ExplorerHeader extends Component {
    
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Git Explorer</h2>
                </div>
            </div>
        );
    }
}

export default ExplorerHeader;