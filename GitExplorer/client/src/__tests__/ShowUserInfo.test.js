import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import fieldDefinitions from '../components/field-definitions';
import ElfDebug from '../components/ElfDebug';
const elfDebug = new ElfDebug(true);


describe('My ShowUserInfo test suite', function () {

    let userData = {};

    const beforeEach = () => {
        userData = {
            login: 'User Login',
            followers: 'User Follower Count',
            url: 'User URL',
            html_url: 'User HTML URL',
            avatar_url: 'User Avatar URL'
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
                fields={fieldDefinitions}
                gitUser={userData}
                onChange={function(){}}

        />,
            div);
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={userData}
            onChange={function(){}}
        />);
        const sign = <p className="App-intro">login-unknown</p>;
        expect(wrapper.contains(sign)).toEqual(true);
        elfDebug.getFirst(wrapper, 'p');
    });

    /*it('renders button click message', () => {
     const wrapper = shallow(<ShowUserInfo />);
     const sign = <p className="App-intro">Login: Robin Dudette</p>;
     wrapper.find('button.getUser').simulate('click');
     getFirst(wrapper, 'p');
     expect(wrapper.contains(sign)).toEqual(true);
     });*/

});