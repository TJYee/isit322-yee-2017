import React from 'react';
import SmallNumbers from '../components/SmallNumbers';
import { shallow } from 'enzyme';
import ElfDebug from '../components/ElfDebug';
const elfDebug = new ElfDebug(true);

describe('My SmallNumbers test suite', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for nine', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<SmallNumbers />);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('renders button click message for eight', () => {
        const wrapper = shallow(<SmallNumbers />);
        const eightSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.seven', () => {
        const wrapper = shallow(<SmallNumbers />);
        const sevenSign = <p className="App-intro">state.seven: 0</p>;
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    it('renders button click message for seven', () => {
        const wrapper = shallow(<SmallNumbers />);
        const sevenSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.six', () => {
        const wrapper = shallow(<SmallNumbers />);
        const sixSign = <p className="App-intro">state.six: 0</p>;
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('renders button click message for six', () => {
        const wrapper = shallow(<SmallNumbers />);
        const sixSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.five', () => {
        const wrapper = shallow(<SmallNumbers />);
        const fiveSign = <p className="App-intro">state.five: 0</p>;
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('renders button click message for five', () => {
        const wrapper = shallow(<SmallNumbers />);
        const fiveSign = <p className="App-intro">state.five: 5</p>;
        wrapper.find('button.getFive').simulate('click');
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.four', () => {
        const wrapper = shallow(<SmallNumbers />);
        const fourSign = <p className="App-intro">state.four: 0</p>;
        expect(wrapper.contains(fourSign)).toEqual(true);
    });

    it('renders button click message for four', () => {
        const wrapper = shallow(<SmallNumbers />);
        const fourSign = <p className="App-intro">state.four: 4</p>;
        wrapper.find('button.getFour').simulate('click');
        expect(wrapper.contains(fourSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.three', () => {
        const wrapper = shallow(<SmallNumbers />);
        const threeSign = <p className="App-intro">state.three: 0</p>;
        expect(wrapper.contains(threeSign)).toEqual(true);
    });

    it('renders button click message for three', () => {
        const wrapper = shallow(<SmallNumbers />);
        const threeSign = <p className="App-intro">state.three: 3</p>;
        wrapper.find('button.getThree').simulate('click');
        expect(wrapper.contains(threeSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.two', () => {
        const wrapper = shallow(<SmallNumbers />);
        const twoSign = <p className="App-intro">state.two: 0</p>;
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    it('renders button click message for two', () => {
        const wrapper = shallow(<SmallNumbers />);
        const twoSign = <p className="App-intro">state.two: 2</p>;
        wrapper.find('button.getTwo').simulate('click');
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.one', () => {
        const wrapper = shallow(<SmallNumbers />);
        const oneSign = <p className="App-intro">state.one: 0</p>;
        expect(wrapper.contains(oneSign)).toEqual(true);
    });

    it('renders button click message for one', () => {
        const wrapper = shallow(<SmallNumbers />);
        const oneSign = <p className="App-intro">state.one: 1</p>;
        wrapper.find('button.getOne').simulate('click');
        expect(wrapper.contains(oneSign)).toEqual(true);
    });
});