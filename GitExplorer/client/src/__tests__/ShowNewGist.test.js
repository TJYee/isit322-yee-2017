import React from 'react';
import ReactDOM from 'react-dom';
import ShowNewGist from '../components/Git/Gist/ShowNewGist';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ShowNewGist.test.js');

describe('My ShowNewGist test suite', () => {
    let bodyData = {
        created_at: 'testCreated At',
        description: 'testDescription',
        html_url: 'testHTML URL',
        updated_at: 'testUpdated At',
        url: 'testURL'
    };

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowNewGist
            gitGist={bodyData}
            onChange={() => {
            }}
        />, div);
    });

    it('renders default created_at data', () => {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={ () => {
            }}
        />);
        const sign = <p>created_at: testCreated At</p>;
        elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default description data', () => {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={ () => {
            }}
        />);
        const sign = <p>description: testDescription</p>;
        elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default html_url data', () => {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={ () => {
            }}
        />);
        const sign = <p>html_url: <a href='testHTML URL'>testHTML URL</a></p>;
        elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default updated_at data', () => {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={ () => {
            }}
        />);
        const sign = <p>updated_at: testUpdated At</p>;
        elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default url data', () => {
        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={ () => {
            }}
        />);
        const sign = <p>url: <a href='testURL'>testURL</a></p>;
        elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('responds to a Button click', () => {
        //create variable to track Button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<ShowNewGist
            gitGist={bodyData}
            onChange={callback}
        />);
        wrapper.find('Button#getGist').simulate('click');
        expect(clicked).toEqual(true);
    });
});
