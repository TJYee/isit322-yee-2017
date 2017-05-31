import React, {Component} from "react";
import "../css/App.css";
import "whatwg-fetch";
import fieldDefinitions from "./Init/field-definitions";
import ExplorerMenu from "./Header/ExplorerMenu";
import ExplorerHeader from "./Header/ExplorerHeader";
import Home from "./Home";
import ShowUserInfo from "./Git/ShowUserInfo";
import GetFoo from "./GetFoo";
import ShowNewGist from "./Git/Gist/ShowNewGist";
import GistLister from "./Git/Gist/GistLister";
import numbersInit from "./Init/numbers-data";
import ElfLogger from "./Debug/elf-logger";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SmallNumbers from "./Number/SmallNumbers";
const logger = new ElfLogger('data');

class DataMaven extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        let tempGitGistList = [{
            avatarUrl: '/',
            createdAt: 'Created At',
            description: 'Description',
            gitPullUrl: 'Git Pull URL',
            htmlUrl: 'HTML URL',
            id: 'ID',
            ownerLogin: 'Owner Login',
            updatedAt: 'Updated At',
            url: 'URL'
        }];
        let tempGitGist = [{
            created_at: 'Created At',
            description: 'Description',
            html_url: 'HTML URL',
            updated_at: 'Updated At',
            url: 'URL'
        }];
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        
        this.state = {
            gitUser: tempGitUser,
            gitGist: tempGitGist,
            gitGistCanIterate: false,
            gitGistList: tempGitGistList
        };
        
        logger.log('DataMaven constructor called.');
        logger.log(fieldDefinitions);
    }
    
    fetchUser = (event) => {
        const that = this;
        fetch('/gitapi/user')
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
        fetch('/gitapi/gist/gist-create')
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
    
    fetchGistList = (event) => {
        const that = this;
        fetch('/gitapi/gist/get-basic-list')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            that.setState({
                gitGistCanIterate: true,
                gitGistList: json.result,
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
                    <div className='container-fluid App-header'>
                        <ExplorerMenu/>
                        <ExplorerHeader/>
                    </div>
                    <div className='container-fluid'>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/get-user' render={(props) => (
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
                        <Route path='/get-list' render={(props) => (
                            <GistLister {...props}
                                        gitGistCanIterate={this.state.gitGistCanIterate}
                                        gitGistList={this.state.gitGistList}
                                        onChange={this.fetchGistList}/>
                        )}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default DataMaven;
