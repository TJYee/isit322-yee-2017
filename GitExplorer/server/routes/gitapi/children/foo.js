let express = require('express');
let router = express.Router();

router.get('/', function (request, response, next) {
    var message = {'result': 'success', 'foo': 'bar', 'file': 'api.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
