import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import fieldDefinitions from '../components/field-definitions';
import ElfDebug from '../components/ElfDebug';
const elfDebug = new ElfDebug(true);


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
            onChange={function() {}}
        />);
        const sign = <p className="ElfFormParagraph" id='login'>login-unknown</p>;
        console.log(sign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(sign)).toEqual(true);
    });

    /*it('renders button click message', () => {
     const wrapper = shallow(<ShowUserInfo />);
     const sign = <p className="App-intro">Login: Robin Dudette</p>;
     wrapper.find('button.getUser').simulate('click');
     getFirst(wrapper, 'p');
     expect(wrapper.contains(sign)).toEqual(true);
     });*/

});