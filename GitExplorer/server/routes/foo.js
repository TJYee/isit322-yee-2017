let express = require('express');
let router = express.Router();
const Logger = require('./elf-logger');
const logger = new Logger('gitapi-foo');

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
