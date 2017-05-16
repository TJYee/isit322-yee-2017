import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import fieldDefinitions from './field-definitions';
import ElfHeader from './ElfHeader';
import ElfLogger from './elf-logger';
import ShowUserInfo from './ShowUserInfo';
import GetFoo from './GetFoo';
import numbersInit from './numbers-data';
import SmallNumbers from './SmallNumbers';
const logger = new ElfLogger(false);

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import ShowNewGist from "./ShowNewGist";

class DataMaven extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser,
            gitGist: {
                created_at: 'Created At',
                description: 'Description',
                html_url: 'HTML URL',
                updated_at: 'Updated At',
                url: 'URL'
            }
        };
        
        logger.log('GetUserInfo constructor called.');
        logger.log(fieldDefinitions);
    }
    
    fetchUser = (event) => {
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
    
    fetchGist = (event) => {
        const that = this;
        fetch('/api/gist-test')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            that.setState({
                gitGist: json.result
            });
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };
    
    render() {
        return (
            <Router>
                <div className='App'>
                    <ElfHeader/>
                    <Route exact path='/' render={(props) => (
                        <ShowUserInfo {...props}
                                      gitUser={this.state.gitUser}
                                      fields={fieldDefinitions}
                                      onChange={this.fetchUser}/>
                    )}/>
                    <Route path='/get-foo' component={GetFoo}/>
                    <Route path='/get-numbers' render={(props) => (
                        <SmallNumbers {...props}
                                      numbers={numbersInit}/>
                    )}/>
                    <Route path='/get-gist' render={(props) => (
                        <ShowNewGist {...props}
                                        gitGist={this.state.gitGist}
                                        onChange={this.fetchGist}/>
                    )}/>
                </div>
            </Router>
        );
    }
}

export default DataMaven;
