import React from 'react';
import ElfHeader from '../components/Header/ElfHeader';
import { shallow } from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ElfHeader.test.js');

describe('My Header test suite', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Git Explorer</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});