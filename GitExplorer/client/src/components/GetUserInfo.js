import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';
const fieldDefinitions = './field-definitions';
import Debug from './elf-logger';
const logger = new Debug(false);

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            userData: {
                login: 'User Login',
                followers: 'User Follower Count',
                url: 'User URL',
                html_url: 'User HTML URL',
                avatar_url: 'User Avatar URL'
            }
        };
    }

    getUser = (event) => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            let body = JSON.parse(json.body);
            that.setState({
                body: body
            });
            //that.setState({});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            that.debug('parsing failed ', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <ShowUserInfo
                    fields={fieldDefinitions}
                    userData={this.state.userData}
                    onChange={this.getUser}
                />
            </div>
        );
    }
}

export default GetUserInfo;
