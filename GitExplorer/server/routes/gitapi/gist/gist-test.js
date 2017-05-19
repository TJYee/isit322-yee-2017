let express = require('express');
let router = express.Router();
var GitHub = require('github-api');
const Logger = require('../../elf-logger');
const logger = new Logger('gist');

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

router.get('/', function (request, response) {
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
        logger.log('Retrieved: ', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function (err) {
        logger.log('Rejected: ', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;
