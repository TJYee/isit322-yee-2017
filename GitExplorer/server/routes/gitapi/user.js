let express = require('express');
let router = express.Router();
let request = require('request');
const Logger = require('../elf-logger');
const logger = new Logger('gitapi-user');

router.get('/', function (req, res, next) {
    var options = {
        url: 'https://api.github.com/users/TJYee',
        headers: {
            'User-Agent': 'request'
        }
    };
    
    request(options, function (error, response, body) {
        // Print the error if one occurred
        logger.log('error:', error);
        // Print the response status code if a response was received
        logger.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        logger.log('body:', body);
        res.send({error: error, response: response, body: body});
    });
});

module.exports = router;
