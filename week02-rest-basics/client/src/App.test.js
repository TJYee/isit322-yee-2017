import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shallow } from 'enzyme';

describe('My App test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders button click message for foo', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});