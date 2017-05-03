import  React from 'react';

export default class ElfDebug {
    constructor(showInit = false) {
        this.showData = showInit;
    }

    getFirst = (wrapper, element) => {
        if (this.showData) {
            const data = wrapper.find(element).first().debug();
            console.log(data);
        }
    };

    getLast = (wrapper, element) => {
        if (this.showData) {
            const data = wrapper.find(element).last().debug();
            console.log(data);
        }
    };

    getAll = (wrapper, element) => {
        if (this.showData) {
            const data = wrapper.find(element).debug();
            console.log(data);

        }
    };

    getIndex = (wrapper, index) => {
        if (this.showData) {
            const data = wrapper.find(index).debug();
            console.log(data);

        }
    };
};