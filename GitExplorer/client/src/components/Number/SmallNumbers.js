import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../../css/App.css";
import ElfLogger from "../Debug/elf-logger";

const logger = new ElfLogger('numbers');

class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nine: this.props.numbers.nine,
            eight: this.props.numbers.eight,
            seven: this.props.numbers.seven,
            six: this.props.numbers.six,
            five: this.props.numbers.five,
            four: this.props.numbers.four,
            three: this.props.numbers.three,
            two: this.props.numbers.two,
            one: this.props.numbers.one
        };
        logger.log('SmallNumbers constructor Called.');
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };

    getSix = () => {
        this.setState({six: '6'});
    };

    getFive = () => {
        this.setState({five: '5'});
    };

    getFour = () => {
        this.setState({four: '4'});
    };

    getThree = () => {
        this.setState({three: '3'});
    };

    getTwo = () => {
        this.setState({two: '2'});
    };

    getOne = () => {
        this.setState({one: '1'});
    };

    render() {
        return (
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>Small Numbers</h2>
                        <Button bsStyle='primary' id='getNine' onClick={this.getNine}>Get Nine</Button>
                        <Button bsStyle='primary' id='getEight' onClick={this.getEight}>Get Eight</Button>
                        <Button bsStyle='primary' id='getSeven' onClick={this.getSeven}>Get Seven</Button>
                        <Button bsStyle='primary' id='getSix' onClick={this.getSix}>Get Six</Button>
                        <Button bsStyle='primary' id='getFive' onClick={this.getFive}>Get Five</Button>
                        <Button bsStyle='primary' id='getFour' onClick={this.getFour}>Get Four</Button>
                        <Button bsStyle='primary' id='getThree' onClick={this.getThree}>Get Three</Button>
                        <Button bsStyle='primary' id='getTwo' onClick={this.getTwo}>Get Two</Button>
                        <Button bsStyle='primary' id='getOne' onClick={this.getOne}>Get One</Button>
                        <p>
                            state.nine: {this.state.nine}
                        </p>
                        <p>
                            state.eight: {this.state.eight}
                        </p>
                        <p>
                            state.seven: {this.state.seven}
                        </p>
                        <p>
                            state.six: {this.state.six}
                        </p>
                        <p>
                            state.five: {this.state.five}
                        </p>
                        <p>
                            state.four: {this.state.four}
                        </p>
                        <p>
                            state.three: {this.state.three}
                        </p>
                        <p>
                            state.two: {this.state.two}
                        </p>
                        <p>
                            state.one: {this.state.one}
                        </p>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to exhibit buttons and setState manipulation.</p>
                    <p>Clicking any given Button will change the given p element to show the labeled number.</p>
                </div>
            </div>
        );
    }
}

export default SmallNumbers;
