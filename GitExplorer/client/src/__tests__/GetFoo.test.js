import React from 'react';
import GetFoo from '../components/GetFoo';
import { shallow } from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GetFoo.test.js');

describe('My GetFoo test suite', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders button click message for foo', () => {
        const wrapper = shallow(<GetFoo />);
        const nineSign = <p className='App-intro'>state.foo: bar</p>;
        wrapper.find('button#getFoo').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});