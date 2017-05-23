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
                    <div className="panel panel-default">
                        <div className="panel panel-header">
                            Index: {index}
                        </div>
                        <div className="panel panel-body">
                            <ul>
                                {Object.keys(el).map((key) => {
                                    return <li>{el[key]}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            });
        } else {
            return <h3> No Data </h3>;
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