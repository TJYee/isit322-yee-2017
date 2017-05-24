import React, {Component} from "react";
import "../../../css/App.css";
import ElfLogger from "../../Debug/elf-logger";
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('GistLister Constructor');
        this.state = {
            index: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
    }
    
    generateDisplay = () => {
        if (this.props.gitGistList) {
            return (
                <div className="panel panel-default">
                    {/*<div className="panel panel-header">
                     Index: {index}
                     </div>
                     <div className="panel panel-body">
                     <ul>
                     {Object.keys(el).map((key) => {
                     return <li>{el[key]}</li>
                     })}
                     </ul>
                     </div>*/}
                    <ul>
                        <li>Index: {this.state.index} / {this.props.gitGistList.length - 1}</li>
                        <li>{this.props.gitGistList[this.state.index].created_at}</li>
                        <li>{this.props.gitGistList[this.state.index].description}</li>
                        <li>{this.props.gitGistList[this.state.index].git_pull_url}</li>
                        <li>{this.props.gitGistList[this.state.index].html_url}</li>
                        <li>{this.props.gitGistList[this.state.index].id}</li>
                        <li>{this.props.gitGistList[this.state.index].ownerLogin}</li>
                        <li>{this.props.gitGistList[this.state.index].updated_at}</li>
                        <li>{this.props.gitGistList[this.state.index].url}</li>
                    </ul>
                    <img src={this.props.gitGistList[this.state.index].avatar_url} alt='Avatar'/>
                </div>
            )
            
        } else {
            return <h3> No Data </h3>;
        }
    };
    
    gistIterator = (event) => {
        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            this.setState((prevState, props) => {
                if (prevState.index < this.props.gitGistList.length - 1) {
                    return {index: prevState.index + 1};
                }
            })
        } else {
            this.setState((prevState, props) => {
                if (prevState.index > 0) {
                    return {index: prevState.index - 1};
                }
            })
        }
    };
    
    render() {
        return (
            <div>
                <h2>Git Lister</h2>
                <button
                    id='gistLister'
                    onClick={this.props.onChange}
                    disabled={this.props.gitGistCanIterate}>Get Gists
                </button>
                <button
                    id='prevGist'
                    onClick={this.props.gistIterator}
                    disabled={!this.props.gitGistCanIterate}>Previous Gist
                </button>
                <button
                    id='nextGist'
                    onClick={this.props.gistIterator}
                    disabled={!this.props.gitGistCanIterate}>Next Gist
                </button>
                <div>{this.generateDisplay()}</div>
            </div>
        )
    }
}

export default GistLister;