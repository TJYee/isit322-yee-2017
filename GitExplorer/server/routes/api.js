var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

var getGitHub = function () {
    let gh;
    if (true) {
        gh = new GitHub({
            token: process.env.TOKEN
        });
    } else {
        gh = new GitHub({
            username: '',
            password: ''
        });
    }
    return gh;
};

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

router.get('/gist-test', function (request, response) {
    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My created gist',
        files: {
            'GistExplorerGist.txt': {
                content: 'Gist of Gists!'
            }
        }
    }).then(function ({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function ({data}) {
        let retrievedGist = data;
        console.log('Retrieved: ', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function (err) {
        console.log('Rejected: ', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;