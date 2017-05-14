var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

/* GET home page. */
router.get('/foo', function (request, response, next) {
    var message = {'result': 'success', 'foo': 'bar', 'file': 'api.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/user', function (req, res, next) {
    var options = {
        url: 'https://api.github.com/users/TJYee',
        headers: {
            'User-Agent': 'request'
        }
    };
    
    request(options, function (error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });
});

router.get('/gist-test', function (req, rest, next) {
    // unauthenticated client
    const gh = new GitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            "file1.txt": {
                content: "Aren't gists great!"
            }
        }
    }).then(function ({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function ({data}) {
        let retrievedGist = data;
        // do interesting things
        console.log('Retrieved: ', retrievedGist);
        console.log('');
        response.status(500).send('result: ', retrievedGist);
    }).catch(function (err) {
        console.log('Promise Rejected: ', err);
        console.log('');
        response.status(500).send('result: ', err);
    });
});

module.exports = router;