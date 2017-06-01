import React from 'react';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GetFoo.test.js');

describe('My GetFoo test suite', () => {
    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders default message for foo', () => {
        const wrapper = shallow(<GetFoo />);
        const sign = <p>state.foo: Waiting for server.</p>;
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders Button click message for foo', () => {
        const wrapper = shallow(<GetFoo />);
        const sign = <p>state.foo: bar</p>;
        wrapper.find('Button#getFoo').simulate('click');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default message for file', () => {
        const wrapper = shallow(<GetFoo />);
        const sign = <p>state.file: Get Foo File will be placed here.</p>;
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders Button click message for file', () => {
        const wrapper = shallow(<GetFoo />);
        const sign = <p>state.file: getFoo.js</p>;
        wrapper.find('Button#getFoo').simulate('click');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
});
