import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import {mount} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'DataMaven.test.js');

describe('My DataMaven test suite', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders and reads h2 header element', () => {
        const wrapper = mount(<DataMaven />);
        const sign = <h2>Welcome to Git Explorer</h2>;
        elfDebugEnzyme.getFirst(wrapper, 'h2');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders and reads p header element', () => {
        const wrapper = mount(<DataMaven />);
        const sign = <p>This project was made for Bellevue College's Spring 2017 ISIT 322 Course.</p>;
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders the Navbar element', () => {
        const wrapper = mount(<DataMaven />);
        //elfDebugEnzyme.getFirst(wrapper, 'Navbar');
        expect(wrapper.find('Navbar').length).toEqual(1);
    });
});
