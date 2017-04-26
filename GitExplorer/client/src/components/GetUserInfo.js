import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            userData: {}
        };

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = true;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                that.debug('Get User');
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            that.debug('Get User received');
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROBABLY A STRING:
            var body = JSON.parse(json.body);
            that.setState({userData: body});
            //that.setState({});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            that.debug('parsing failed ', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <h2>Git User Info</h2>
                <p className="App-intro">Login: {this.state.userData.login}</p>
                <p className="App-intro">Followers: {this.state.userData.followers}</p>
                <p className="App-intro">URL: {this.state.userData.url}</p>
                <p className="App-intro">HTML URL: {this.state.userData.html_url}</p>
                <p className="App-intro">Avatar URL: {this.state.userData.avatar_url}</p>
                <button className="getUser" onClick={this.getUser}>Get User Info</button>
            </div>
        );
    }
}

export default GetUserInfo;
