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
                <p>{JSON.stringify(this.props.gitGist, null, 4)}</p>
                <button id="getGist" onClick={this.props.onChange}>Get Gist</button>
            </div>
        )
    }
}

export default ShowNewGist;