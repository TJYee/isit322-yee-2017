import React, {Component} from "react";
import "../../../css/App.css";
import ElfLogger from "../../Debug/elf-logger";
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('GistLister Constructor');
    }
    
    generateDisplay = () => {
        if (this.props.gitGistList) {
            let output = this.props.gitGistList;
            console.log(output);
            return output.map((el, index) => {
                return (
                    <div className='panel panel-default'>
                        <div className='panel panel-header'>
                            Index: {index}
                        </div>
                        <ul>
                            <li>created_at: {el.created_at}</li>
                            <li>description: {el.description}</li>
                            <li>git_pull_url: {el.git_pull_url}</li>
                            <li>html_url: {el.html_url}</li>
                            <li>id: {el.id}</li>
                            <li>updated_at: {el.updated_at}</li>
                            <li>url: {el.url}</li>
                        </ul>
                    </div>
                )
            });
        } else {
            return (
                <div>
                    <ul>
                        <li><h3>No Data</h3></li>
                    </ul>
                </div>
            );
        }
    };
    
    render() {
        return (
            <div>
                <h1> Git Lister </h1>
                <div>{this.generateDisplay()}</div>
                <button id='getGistList' onClick={this.props.onChange}>Get GistList</button>
            </div>
        )
    }
}

export default GistLister;