import React from 'react';
import ReactDOM from 'react-dom';
import { ReactBasics } from './ReactBasics.js';
import { ReactHello } from './ReactHello.js';

ReactDOM.render(
    <div>
        <ReactBasics/>
        <ReactHello/>
    </div>,
    document.getElementById('root')
);