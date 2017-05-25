let express = require('express');
let router = express.Router();
const ElfLogger = require('./elf-logger');
const logger = new ElfLogger('foo');

router.get('/', function (request, response, next) {
    const message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };
    logger.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
