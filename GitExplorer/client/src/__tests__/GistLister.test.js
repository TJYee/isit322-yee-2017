import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/Git/Gist/GistLister';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GistLister.test.js');

describe('Gist Lister Suite', () => {
    let bodyData = [
        {
            avatarUrl: '/',
            createdAt: 'Created At',
            description: 'Description',
            gitPullUrl: 'Git Pull URL',
            htmlUrl: 'HTML URL',
            id: 'ID',
            ownerLogin: 'Owner Login',
            updatedAt: 'Updated At',
            url: 'URL'
        },
        {
            avatarUrl: '/',
            createdAt: 'Created At',
            description: 'Description',
            gitPullUrl: 'Git Pull URL',
            htmlUrl: 'HTML URL',
            id: 'ID',
            ownerLogin: 'Owner Login',
            updatedAt: 'Updated At',
            url: 'URL'
        }
    ];
    let iterationBool = false;

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />, div);
    });

    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        elfDebugEnzyme.getElement(wrapper, 'h2');
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders GistLister ul Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        elfDebugEnzyme.getElement(wrapper, 'ul');
        expect(wrapper.find('ul').length).toEqual(1);
    });

    it('renders GistLister default index li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Index: 0 / 1</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default createdAt li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Created At</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default description li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Description</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default gitPullUrl li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Git Pull URL</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default htmlUrl li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>HTML URL</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default id li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>ID</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default ownerLogin li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Owner Login</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default updatedAt li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>Updated At</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default url li Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <li>URL</li>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders GistLister default img Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <img src='/' alt='Avatar'/>;
        elfDebugEnzyme.getElement(wrapper, 'li');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('gistLister Button responds to Button click', () => {
        //create variable to track Button click status
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
        elfDebugEnzyme.getElement(wrapper, 'Button');
        wrapper.find('Button#gistLister').simulate('click');
        expect(clicked).toEqual(true);
    });
});
