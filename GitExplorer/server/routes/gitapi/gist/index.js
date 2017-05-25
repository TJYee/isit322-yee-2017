let express = require('express');
let router = express.Router();
const ElfLogger = require('../../elf-logger');
const logger = new ElfLogger('gist');

router.use('/gist-create', require('./create'));
router.use('/get-basic-list', require('./list'));

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

module.exports = router;
