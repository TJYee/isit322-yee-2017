let express = require('express');
let router = express.Router();
const Logger = require('../elf-logger');
const logger = new Logger('gitapi');

router.get('/', (req, res) => {
    res.send('OK');
});

router.use('/user', require('./user'));

module.exports = router;
