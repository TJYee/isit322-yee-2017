import React from "react";
import {connect} from "react-redux";
import "./App.css";

let DispatchConnect = ({dispatch, statement, kind}) => {

    const verifyStatement = () => {
        dispatch({type: 'VERIFY'});
    };

    const denyEverything = () => {
        dispatch({type: 'DENY'});
    };

    const noComment = () => {
        dispatch({type: 'NO COMMENT'});
    };
    return (
        <div className="App">
            <div>
                <h1>Political Science Dispatch Connect Redux</h1>

                <p>This component uses redux.</p>
                <p>statement: {statement}</p>
                <p>kind: {kind}</p>
                <hr />
                <button onClick={verifyStatement}>Verify</button>
                <button onClick={denyEverything}>Deny</button>
                <button onClick={noComment}>No Comment</button>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        statement: state.statement,
        kind: state.kind
    }
};

DispatchConnect = connect(mapStateToProps)(DispatchConnect);
export default DispatchConnect;
