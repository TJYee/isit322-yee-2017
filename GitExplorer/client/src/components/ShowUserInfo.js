import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class ShowUserInfo extends Component {
    constructor(props) {
        super(props);

        if (!this.props.userData) {
            throw new Error('No User Data.');
        }
    }

    render() {
        return (
            <form className="Form">{
                this.props.fields.map((field, index) => {
                    return this.getForm(field, index)
                })
            }
                <button className="getUser" onClick={this.props.onChange}>Get User Info</button>
            </form>
        );
    }
}

export default ShowUserInfo;
