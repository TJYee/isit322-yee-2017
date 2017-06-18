let express = require('express');
let router = express.Router();
let auth = require('./getGitHub');

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
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function (err) {
        response.status(500).send({'result': err});
    });
});

module.exports = router;
