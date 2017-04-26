import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import { shallow } from 'enzyme';

var quiet = false;

describe('My GetUserInfo test suite', function() {

    const getFirst = (wrapper, element) => {
        const p = wrapper.find(element).first().debug();
        console.log(p);
    };

    const getLast = (wrapper, element) => {
        const p = wrapper.find(element).last().debug();
        console.log(p);
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders default login data', () => {
        const wrapper = shallow(<GetUserInfo />);
        const sign = <p className="App-intro">Login: </p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(sign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo />);
        const sign = <p className="App-intro">Login: Robin Dudette</p>;
        wrapper.find('button.getUser').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(sign)).toEqual(true);
    });

});