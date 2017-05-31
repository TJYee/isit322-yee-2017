import React from 'react';
import ElfHeader from '../components/Header/ExplorerHeader';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ExplorerHeader.test.js');

describe('My Header test suite', () => {
    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders and reads h2 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2 className='page-header'>Git Explorer</h2>;
        elfDebugEnzyme.getElement(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
