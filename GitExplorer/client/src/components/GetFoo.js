import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfLogger from './Debug/elf-logger';
const logger = new ElfLogger('foo');

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Foo File will be placed here.',
            foo: 'waiting for server',
        };
    }

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
            <div className='App'>
                <h2>Get Foo</h2>
                <p className='App-intro'>
                    state.foo: {this.state.foo}
                </p>
                <p className='App-intro'>
                    state.file: {this.state.file}
                </p>
                <button id='getFoo' onClick={this.getFoo}>Get Foo</button>
                <br />
            </div>
        );
    }
}

export default GetFoo;
