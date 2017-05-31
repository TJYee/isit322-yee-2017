import React, {Component} from "react";
import logo from "../../images/logo.png";

class ExplorerHeader extends Component {
    
    render() {
        return (
            <div >
                <img src={logo} className='App-logo' alt='logo'/>
                <h2 className='page-header'>Git Explorer</h2>
            </div>
        );
    }
}

export default ExplorerHeader;