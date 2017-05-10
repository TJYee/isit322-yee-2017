import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';
import fieldDefinitions from './field-definitions';
import ElfLogger from './elf-logger';
const logger = new ElfLogger(false);

class GetUserInfo extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

        logger.log('GetUserInfo constructor called.')
        logger.log(fieldDefinitions);
    }

    getUser = (event) => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            var gitUser = JSON.parse(json.body);
            that.setState({
                gitUser: gitUser
            });
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    render() {
        return (
            <div className="App">
                <ShowUserInfo
                    fields={fieldDefinitions}
                    gitUser={this.state.gitUser}
                    onChange={this.getUser}
                />
            </div>
        );
    }
}

export default GetUserInfo;
