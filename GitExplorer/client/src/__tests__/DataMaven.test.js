import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import {mount} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'DataMaven.test.js');


describe('My DataMaven test suite', function () {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    it('renders default login data', () => {
        const wrapper = mount(<DataMaven />);
        const sign = <p className='ElfFormParagraph' id='login'>login-unknown</p>;
        //console.log(sign);
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
    
    it('renders login data when button is clicked', () => {
        const wrapper = mount(<DataMaven />);
        const sign = <p className='ElfFormParagraph' id='login'>Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
});