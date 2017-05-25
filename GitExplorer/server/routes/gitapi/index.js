let express = require('express');
let router = express.Router();
const ElfLogger = require('../elf-logger');
const logger = new ElfLogger('gitapi');

router.use('/gist', require('./gist'));
router.use('/user', require('./user'));

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

module.exports = router;
