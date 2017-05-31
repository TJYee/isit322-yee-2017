import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'Home.test.js');

describe('My Home test suite', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders and reads h2 element', () => {
        const wrapper = shallow(<Home />);
        const sign = <h2>Welcome to Git Explorer</h2>;
        elfDebugEnzyme.getFirst(wrapper, 'h2');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders and reads first p element', () => {
        const wrapper = shallow(<Home />);
        const sign = <p>This project was made for Bellevue College's Spring 2017 ISIT 322 Course.</p>;
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders and reads second p element', () => {
        const wrapper = shallow(<Home />);
        const sign = <p>Please note that an environment variable of "GHTOKEN" needs to be defined as a GitHub Token with
            Gist permissions.</p>;
        elfDebugEnzyme.getLast(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
});
