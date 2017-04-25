import React, {Component} from 'react';
import '../App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {};

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = true;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;
