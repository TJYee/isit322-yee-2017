import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import {shallow} from 'enzyme';

let quiet = false;

describe('My ShowUserInfo test suite', function () {

    const getFirst = (wrapper, element) => {
        const p = wrapper.find(element).first().debug();
        console.log(p);
    };

    const getLast = (wrapper, element) => {
        const p = wrapper.find(element).last().debug();
        console.log(p);
    };

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
                userData={userData}
        />,
            div);
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo
            userData={userData}
        />);
        const sign = <p className="App-intro">Login: User Login</p>;
        expect(wrapper.contains(sign)).toEqual(true);
    });

    /*it('renders button click message', () => {
     const wrapper = shallow(<ShowUserInfo />);
     const sign = <p className="App-intro">Login: Robin Dudette</p>;
     wrapper.find('button.getUser').simulate('click');
     getFirst(wrapper, 'p');
     expect(wrapper.contains(sign)).toEqual(true);
     });*/

});