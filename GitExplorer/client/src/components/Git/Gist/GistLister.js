import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../../../css/App.css";
import ElfLogger from "../../Debug/elf-logger";
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('GistLister constructor called.');
        this.state = {
            listIndex: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
    }

    generateDisplay = () => {
        if (this.props.gitGistList) {
            return (
                <div className="panel panel-body">
                    <ul>
                        <li>Index: {this.state.listIndex} / {this.props.gitGistList.length - 1}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].createdAt}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].description}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].gitPullUrl}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].htmlUrl}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].id}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].ownerLogin}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].updatedAt}</li>
                        <li>{this.props.gitGistList[this.state.listIndex].url}</li>
                    </ul>
                    <img src={this.props.gitGistList[this.state.listIndex].avatarUrl} alt='Avatar'/>
                </div>
            )

        } else {
            return <h3> No Data </h3>;
        }
    };

    gistIterator = (event) => {
        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            logger.log('nextGist Called');
            this.setState((prevState, props) => {
                if (prevState.listIndex < props.gitGistList.length - 1) {
                    return {listIndex: prevState.listIndex + 1};
                }
            });
        } else {
            logger.log('prevGist Called');
            this.setState((prevState, props) => {
                if (prevState.listIndex > 0) {
                    return {listIndex: prevState.listIndex - 1};
                }
            });
        }
    };

    render() {
        return (
            <div>
                <div className='col-sm-8'>
                    <Jumbotron>
                        <h2>Gist Lister</h2>
                        <Button
                            bsStyle='primary'
                            id='gistLister'
                            onClick={this.props.onChange}
                            disabled={this.props.gitGistCanIterate}
                        >
                            Get Gists
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='prevGist'
                            onClick={this.gistIterator}
                            disabled={!this.props.gitGistCanIterate}
                        >
                            Previous Gist
                        </Button>
                        <Button
                            bsStyle='primary'
                            id='nextGist'
                            onClick={this.gistIterator}
                            disabled={!this.props.gitGistCanIterate}
                        >
                            Next Gist
                        </Button>
                        <div>{this.generateDisplay()}</div>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>Description of component to be determined.</p>
                </div>
            </div>
        )
    }
}

export default GistLister;