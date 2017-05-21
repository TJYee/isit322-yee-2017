import React, {Component} from "react";
import "../../../css/App.css";
import ElfLogger from "../../Debug/elf-logger";
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('GistLister Constructor');
    }
    
    render() {
        return (
            <div>
                <h2>Gist Lister</h2>
                <ul>
                    {
                        this.props.gitGist.map((field) => {
                            return <li>{field.id}</li>
                        })
                    }
                    <li>End</li>
                </ul>
                <button id='getList' onClick={this.props.onChange}>Get Gist List</button>
            </div>
        );
    }
}

export default GistLister;