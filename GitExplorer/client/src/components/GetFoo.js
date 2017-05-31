import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../css/App.css";
import "whatwg-fetch";
import ElfLogger from "./Debug/elf-logger";
const logger = new ElfLogger('foo');

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Foo File will be placed here.',
            foo: 'Waiting for server.',
        };
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

    render() {
        return (
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>Get Foo</h2>
                        <p>
                            state.foo: {this.state.foo}
                        </p>
                        <p>
                            state.file: {this.state.file}
                        </p>
                        <Button
                            bsStyle='primary'
                            id='getFoo'
                            onClick={this.getFoo}
                        >
                            Get Foo
                        </Button>
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

export default GetFoo;
