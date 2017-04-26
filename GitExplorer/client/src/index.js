import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from './components/GetUserInfo';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import GetFoo from './components/GetFoo';
import './css/index.css';

ReactDOM.render(
    <div>
        <Header />
        <GetUserInfo />
        <GetFoo />
        <SmallNumbers />
    </div>,
    document.getElementById('root')
);