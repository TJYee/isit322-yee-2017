import React from 'react';
import ReactDOM from 'react-dom';
import ShowNewGist from '../components/Git/Gist/ShowNewGist';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ShowNewGist.test.js');

describe('My ShowNewGist test suite', function () {
    
    let bodyData = {
        created_at: 'testTime'
    };
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<ShowNewGist
            gitGist={bodyData}
            onChange={function () {
            }}
        />, div);
    });
    
    it('renders default created_at data', function () {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={function () {
            }}
        />);
        const sign = <p className='App-intro'>created_at: testTime</p>;
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
        
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={callback}
        />);
        wrapper.find('button#getGist').simulate('click');
        expect(clicked).toEqual(true);
    });
});