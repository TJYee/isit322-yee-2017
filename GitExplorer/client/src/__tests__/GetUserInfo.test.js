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

    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const sign = <p className='ElfFormParagraph' id='login'>login-unknown</p>;
        //console.log(sign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const sign = <p className='ElfFormParagraph' id='login'>Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        //console.log(sign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
});