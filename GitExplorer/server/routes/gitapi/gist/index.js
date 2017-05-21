let express = require('express');
let router = express.Router();
const Logger = require('../../elf-logger');
var logger = new Logger('gist');

router.get('/', (req, res) => {
    res.send('OK');
});

router.use('/gist-create', require('./create'));
router.use('/get-basic-list', require('./list'));

module.exports = router;
