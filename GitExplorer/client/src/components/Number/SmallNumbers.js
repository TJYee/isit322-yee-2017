import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../../css/App.css";

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
                        <p className='App-intro'>
                            state.nine: {this.state.nine}
                        </p>
                        <p className='App-intro'>
                            state.eight: {this.state.eight}
                        </p>
                        <p className='App-intro'>
                            state.seven: {this.state.seven}
                        </p>
                        <p className='App-intro'>
                            state.six: {this.state.six}
                        </p>
                        <p className='App-intro'>
                            state.five: {this.state.five}
                        </p>
                        <p className='App-intro'>
                            state.four: {this.state.four}
                        </p>
                        <p className='App-intro'>
                            state.three: {this.state.three}
                        </p>
                        <p className='App-intro'>
                            state.two: {this.state.two}
                        </p>
                        <p className='App-intro'>
                            state.one: {this.state.one}
                        </p>
                        <Button bsStyle='primary' className='getNine' onClick={this.getNine}>Get Nine</Button>
                        <Button bsStyle='primary' className='getEight' onClick={this.getEight}>Get Eight</Button>
                        <Button bsStyle='primary' className='getSeven' onClick={this.getSeven}>Get Seven</Button>
                        <Button bsStyle='primary' className='getSix' onClick={this.getSix}>Get Six</Button>
                        <Button bsStyle='primary' className='getFive' onClick={this.getFive}>Get Five</Button>
                        <Button bsStyle='primary' className='getFour' onClick={this.getFour}>Get Four</Button>
                        <Button bsStyle='primary' className='getThree' onClick={this.getThree}>Get Three</Button>
                        <Button bsStyle='primary' className='getTwo' onClick={this.getTwo}>Get Two</Button>
                        <Button bsStyle='primary' className='getOne' onClick={this.getOne}>Get One</Button>
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
