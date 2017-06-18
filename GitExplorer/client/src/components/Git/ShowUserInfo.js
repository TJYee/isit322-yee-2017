import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import "../../css/App.css";
import ElfElements from "../Elf/ElfElements";
import ElfLogger from "../Debug/elf-logger";
const logger = new ElfLogger('gist-user');

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
            <div key={field.id}>
                <label htmlFor={field.id}>{field.label}:</label>
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
                    <Jumbotron>
                        <form className='Form'>
                            <h2>Show Git User</h2>
                            <Button
                                bsStyle='primary'
                                id='getUser'
                                onClick={this.props.onChange}
                            >
                                Get User
                            </Button>
                            {
                                this.props.fields.map((field, index) => {
                                    return this.getForm(field, index)
                                })
                            }
                        </form>
                    </Jumbotron>
                </div>
                <div className='panel panel-info col-sm-4'>
                    <h2 className='panel-heading'>Info</h2>
                    <p>This component was designed to fetch GitHub User Information and save it to state.</p>
                    <p>The page will automatically print dummy data from a local file.</p>
                    <p>The dummy data will be overwritten after state is altered.</p>
                </div>
            </div>
        )
    }
}

export default ShowUserInfo;