import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/Git/ShowUserInfo';
import {mount} from 'enzyme';
import fieldDefinitions from '../components/Init/backupfield-definitions';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ShowUserInfo.test.js');


describe('My ShowUserInfo test suite', function () {
    
    let bodyData = {};
    
    beforeEach(function () {
        const tempBody = {};
        for (let value of fieldDefinitions) {
            tempBody[value.id] = value.sample;
        }
        bodyData = tempBody;
    });
    
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={function () {
            }}
        />, div);
    });
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={function () {
            }}
        />);
        const sign = <p id='login'>login-unknown</p>;
        //console.log(sign);
        elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });
    
    it('responds to a button click', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };
        
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={callback}
        />);
        wrapper.find('button#getUser').simulate('click');
        expect(clicked).toEqual(true);
    });
    
});