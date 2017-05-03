import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfElements from './ElfElements';
import ElfLogger from './elf-logger';
const logger = new ElfLogger(true);

class ShowUserInfo extends Component {
    constructor(props) {
        super(props);

        /*const tempGitUser = {};
         for (let value of fieldDefinitions) {
         tempGitUser[value.id] = value.sample;
         }
         this.state = {
         gitUser: tempGitUser
         };*/

        //this.shouldUpdate = true;
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props, null, 4));
    }

    getForm = (field, index) => {
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id]}
                             onChange={this.props.onChange}
                />
            </div>
        )
    };

    render() {

        return (
            <form className="Form">
                {
                    this.props.fields.map((field, index) => {
                        return this.getForm(field, index)
                    })
                }
                <button id="getUser" onClick={this.props.onChange}>Get User</button>
            </form>
        )
    }
}

export default ShowUserInfo;