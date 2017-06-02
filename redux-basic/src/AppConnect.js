import React from "react";
import {connect} from "react-redux";
import "./App.css";

let AppConnect = ({statement, kind, verifyStatement, denyEverything, noComment}) => {
    return (
        <div className="App">
            <div>
                <h1>Political Science App Connect Redux</h1>

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

const mapDispatchToProps = (dispatch) => {
    return {
        verifyStatement: () => {
            dispatch({type: 'VERIFY'});
        },
        denyEverything: () => {
            dispatch({type: 'DENY'});
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'});
        }
    }
};

AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppConnect);
export default AppConnect;
