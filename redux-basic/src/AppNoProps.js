import React, {Component} from "react";
import {connect} from "react-redux";
import "./App.css";

class AppNoProps extends Component {

    verifyStatement = () => {
        this.props.dispatch({type: 'VERIFY'});
    };

    denyEverything = () => {
        this.props.dispatch({type: 'DENY'});
    };

    noComment = () => {
        this.props.dispatch({type: 'NO COMMENT'});
    };

    render() {
        return (

            <div className="App">
                <div>
                    <h1>Political Science No Props Redux</h1>

                    <p>This component uses redux.</p>
                    {this.props.statement}
                    <hr />
                    <button onClick={this.verifyStatement}>Verify</button>
                    <button onClick={this.denyEverything}>Deny</button>
                    <button onClick={this.noComment}>No Comment</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

AppNoProps = connect(mapStateToProps)(AppNoProps);
export default AppNoProps;
