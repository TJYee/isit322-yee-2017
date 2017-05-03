import Logger from './elf-logger';
const logger = new Logger(true);

const ElfTestShow = class {
    constructor(showLogInit=false) {
        this.showLog = showLogInit;
    }

    getFirst(wrapper, element) {
        if (this.showLog) {
            const sign = wrapper.find(element).first().debug();
            logger.log("ENZYME TEST GET FIRST:", sign);
        }
    }


    getAll(wrapper, element) {
        if (this.showLog) {
            const sign = wrapper.find(element).debug();
            logger.log("ENZYME DEBUG GET ALL:", sign);
        }
    }

    getLast(wrapper, element) {
        if (!this.showLog) {
            const sign = wrapper.find(element).last().debug();
            logger.log("ENZYME TEST GET LAST:", sign);
        }
    }

};

export default ElfTestShow;