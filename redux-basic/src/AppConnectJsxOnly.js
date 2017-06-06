import React from 'react';
import './App.css';

let AppConnectJsxOnly = ({statement, kind, deny, verify, noComment}) => {

    return (
        <div className="App">
            <h1>App Connect JSX Only</h1>
            <p className="App-intro">
                This AppConnect component uses Redux and connect.
                The connect bits are in a separate file called <strong>AppConnectMaps</strong>.
            </p>
            <p>statement: {statement}</p>
            <p>kind: {kind}</p>
            <hr />
            <button onClick={verify}>Verify</button>
            <button onClick={deny}>Deny</button>
            <button onClick={noComment}>No Comment</button>
        </div>
    );
};

export default AppConnectJsxOnly;