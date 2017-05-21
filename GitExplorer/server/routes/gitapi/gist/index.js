let express = require('express');
let router = express.Router();
const Logger = require('../../elf-logger');
const logger = new Logger('gist');

router.use('/gist-create', require('./create'));
router.use('/get-basic-list', require('./list'));

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

module.exports = router;
