let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/', function (req, res, next) {
    var options = {
        url: 'https://api.github.com/users/TJYee',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function (error, response, body) {
        res.send({error: error, response: response, body: body});
    });
});

module.exports = router;
