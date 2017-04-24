import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('My Header test', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});