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
        logger.log('YouRang constructor called.')
    };

    getFoo = () => {
        const that = this;
        fetch('/foo')
            .then(function (response) {
                logger.log('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
            logger.log('GETONE-FETCH-TWO');
            logger.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            logger.log('parsing failed', ex);
        });
    };

    fetchUser = (event) => {
        const that = this;
        fetch('/git-user/user')
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
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>Get Foo</h2>
                        <Button
                            bsStyle='primary'
                            id='getFoo'
                            onClick={this.getFoo}
                        >
                            Get Foo
                        </Button>
                        <p>
                            state.foo: {this.state.foo}
                        </p>
                        <p>
                            state.file: {this.state.file}
                        </p>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to fetch simple data from an API server and save it to state.</p>
                    <p>The page will then display the changed state.</p>
                </div>
            </div>
        );
    }
}

export default YouRang;
