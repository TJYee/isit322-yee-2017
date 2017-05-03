import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import {mount} from 'enzyme';
import ElfDebug from '../components/ElfDebug';
const elfDebug = new ElfDebug(true);


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
        const sign = <p className="ElfFormParagraph" id='login' onChange={function(){}}>login-unknown</p>;
        console.log(sign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.contains(sign)).toEqual(true);
    });

    /*it('renders button click message', () => {
     const wrapper = shallow(<GetUserInfo />);
     const sign = <p className="App-intro">Login: Robin Dudette</p>;
     wrapper.find('button.getUser').simulate('click');
     getFirst(wrapper, 'p');
     expect(wrapper.contains(sign)).toEqual(true);
     });*/

});