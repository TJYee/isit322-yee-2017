import React, {Component} from "react";
import "../css/App.css";
import ElfLogger from "./elf-logger";
const logger = new ElfLogger(false);

class ShowNewGist extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowNewGist constructor called.');
        
        if (!this.props.gitGist) {
            throw new Error("No gist data.");
        }
    }
    
    render() {
        return (
            <div className="App">
                <h2>Insert New Gist</h2>
                
                <p className='App-intro'>
                    created_at: {this.props.gitGist.created_at}
                </p>
                <p className='App-intro'>
                    description: {this.props.gitGist.description}
                </p>
                <p className='App-intro'>
                    html_url: <a href={this.props.gitGist.html_url}>{this.props.gitGist.html_url}</a>
                </p>
                <p className='App-intro'>
                    updated_at: {this.props.gitGist.updated_at}
                </p>
                <p className='App-intro'>
                    url: <a href={this.props.gitGist.url}>{this.props.gitGist.url}</a>
                </p>
                
                <button id='getGist' onClick={this.props.onChange}>Get Gist</button>
                <h6>Do not click on hyperlinks before button click returns data</h6>
            </div>
        )
    }
}

export default ShowNewGist;