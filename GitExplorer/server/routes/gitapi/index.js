let express = require('express');
let router = express.Router();
const Logger = require('../elf-logger');
const logger = new Logger('gitapi');

router.use('/gist', require('./gist'));
router.use('/user', require('./user'));

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

module.exports = router;
