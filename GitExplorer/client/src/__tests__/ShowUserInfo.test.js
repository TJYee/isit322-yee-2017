import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/Git/ShowUserInfo';
import {mount} from 'enzyme';
import fieldDefinitions from '../components/Init/field-definitions';
import ElfDebugEnzyme from '../components/Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'ShowUserInfo.test.js');

describe('My ShowUserInfo test suite', () => {
    let bodyData = {};

    beforeEach(() => {
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
            onChange={() => {
            }}
        />, div);
    });

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='login'>login-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default id data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='id'>id-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default avatar_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='avatar_url'>avatar_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default gravatar_id data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='gravatar_id'>gravatar_id-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='url'>url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default html_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='html_url'>html_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default followers_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='followers_url'>followers_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default following_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='following_url'>following_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default gists_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='gists_url'>gists_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default starred_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='starred_url'>starred_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default subscriptions_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='subscriptions_url'>subscriptions_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default organizations_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='organizations_url'>organizations_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default repos_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='repos_url'>repos_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default events_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='events_url'>events_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default received_events_url data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='received_events_url'>received_events_url-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default type data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='type'>type-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default site_admin data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='site_admin'>site_admin-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default name data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='name'>name-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default company data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='company'>company-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default blog data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='blog'>blog-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default location data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='location'>location-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default email data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='email'>email-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default hireable data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='hireable'>hireable-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default bio data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='bio'>bio-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default public_repos data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='public_repos'>public_repos-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default public_gists data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='public_gists'>public_gists-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default followers data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='followers'>followers-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default following data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='following'>following-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default created_at data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='created_at'>created_at-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('renders default updated_at data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={() => {
            }}
        />);
        const sign = <p id='updated_at'>updated_at-unknown</p>;
        //elfDebugEnzyme.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    it('responds to a Button click', () => {
        //create variable to track Button click status
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
        elfDebugEnzyme.getElement(wrapper, 'Button');
        wrapper.find('button#getUser').simulate('click');
        expect(clicked).toEqual(true);
    });
});
