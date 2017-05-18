let express = require('express');
let router = express.Router();
const Logger = require('../elf-logger');
var logger = new Logger('gitapi');

router.get('/', (req, res) => {
    res.send('OK');
});

router.use('/user', require('./children/user'));
router.use('/gist-test', require('./children/gist-test'));
router.use('/get-basic-list', require('./children/gists'));

module.exports = router;
