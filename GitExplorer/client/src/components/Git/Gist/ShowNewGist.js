import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../../../css/App.css";
import ElfLogger from "../../Debug/elf-logger";
const logger = new ElfLogger('gist-user');

class ShowNewGist extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowNewGist constructor called.');

        if (!this.props.gitGist) {
            throw new Error('No gist data.');
        }
        logger.log(this.props.gitGist);
    }

    render() {
        return (
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>Insert New Gist</h2>
                        <Button
                            bsStyle='primary'
                            id='getGist'
                            onClick={this.props.onChange}
                        >
                            Get Gist
                        </Button>
                        <h6>Do not click on hyperlinks before button click returns data</h6>
                        <p>
                            created_at: {this.props.gitGist.created_at}
                        </p>
                        <p>
                            description: {this.props.gitGist.description}
                        </p>
                        <p>
                            html_url: <a href={this.props.gitGist.html_url}>{this.props.gitGist.html_url}</a>
                        </p>
                        <p>
                            updated_at: {this.props.gitGist.updated_at}
                        </p>
                        <p>
                            url: <a href={this.props.gitGist.url}>{this.props.gitGist.url}</a>
                        </p>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to create and save a Gist for a Github user.</p>
                    <p>The response from the gist.create call is saved to state and displayed on the page.</p>
                </div>
            </div>
        )
    }
}

export default ShowNewGist;