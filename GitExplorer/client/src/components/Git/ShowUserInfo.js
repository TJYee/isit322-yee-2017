import React, {Component} from "react";
import "../../css/App.css";
import ElfElements from "../Elf/ElfElements";
import ElfLogger from "../Debug/elf-logger";
const logger = new ElfLogger(false);

class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowUserInfo constructor called.');
        
        if (!this.props.gitUser) {
            throw new Error('No user data.');
        }
    }
    
    getForm = (field, index) => {
        return (
            <div className='ElfFormRow' key={field.id}>
                <label className='ElfFormLabel' htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id] || ''}
                             onChange={this.props.onChange}
                />
            </div>
        )
    };
    
    render() {
        
        return (
            <div>
                <div className='col-sm-8'>
                    <form className='Form'>
                        <h2>Show Git User</h2>
                        {
                            this.props.fields.map((field, index) => {
                                return this.getForm(field, index)
                            })
                        }
                        <button id='getUser' onClick={this.props.onChange}>Get User</button>
                    </form>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to retrieve GitHub User Information and save it to state.</p>
                    
                </div>
            </div>
        )
    }
}

export default ShowUserInfo;