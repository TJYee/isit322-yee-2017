import React from "react";
import ReactDOM from "react-dom";
import GistLister from "../components/Git/Gist/GistLister";
import {shallow} from "enzyme";
import ElfDebugEnzyme from "../components/Debug/ElfDebugEnzyme";
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GistLister.test.js');

describe('Gist Lister Suite', function () {
    
    let bodyData = [{
        avatarUrl: '/',
        createdAt: 'Created At',
        description: 'Description',
        gitPullUrl: 'Git Pull URL',
        htmlUrl: 'HTML URL',
        id: 'ID',
        ownerLogin: 'Owner Login',
        updatedAt: 'Updated At',
        url: 'URL'
    }];
    let iterationBool = false;
    
    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={function () {
            }}
        />, div);
    });
    
    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={function () {
            }}
        />);
        //elfDebugEnzyme.display(wrapper.debug());
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    
    it('renders GistLister UL Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={function () {
            }}
        />);
        //elfDebugEnzyme.getElement(wrapper, 'ul');
        expect(wrapper.find('ul').length).toEqual(1);
    });
    
    it('gistLister button responds to button click', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };
        
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={callback}
        />);
        //elfDebugEnzyme.display(wrapper.debug());
        wrapper.find('Button#gistLister').simulate('click');
        expect(clicked).toEqual(true);
    });
});