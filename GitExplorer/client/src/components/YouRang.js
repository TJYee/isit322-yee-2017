import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../css/App.css";
import "whatwg-fetch";
import ElfLogger from "./Debug/elf-logger";
const logger = new ElfLogger('you-rang');

class YouRang extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Waiting for server.'
        };
        logger.log('YouRang constructor called.');
    };

    fetchRang = (event) => {
        const that = this;
        fetch('/' + event.target.id +'/you-rang')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            that.setState(data => (json));
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>You Rang?</h2>
                        <Button
                            bsStyle='primary'
                            id='gist'
                            onClick={this.fetchRang}
                        >
                            Ring gist
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='git-socket'
                            onClick={this.fetchRang}
                        >
                            Ring git-socket
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='git-user'
                            onClick={this.fetchRang}
                        >
                            Ring git-user
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='markdown'
                            onClick={this.fetchRang}
                        >
                            Ring markdown
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='qux'
                            onClick={this.fetchRang}
                        >
                            Ring qux
                        </Button>
                        <p>
                            message: {this.state.message}
                        </p>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to fetch simple data from an API server and save it to state.</p>
                </div>
            </div>
        );
    }
}

export default YouRang;
