import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import {mount} from 'enzyme';
import ElfDebug from '../components/ElfDebug';
const elfDebug = new ElfDebug(false);


describe('My GetUserInfo test suite', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

});