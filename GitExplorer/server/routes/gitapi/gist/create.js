let express = require('express');
let router = express.Router();
let auth = require('../getGitHub');
const ElfLogger = require('../../elf-logger');
const logger = new ElfLogger('gist');

router.get('/', function (request, response) {
    let gist = auth().getGist(); // not a gist yet
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
