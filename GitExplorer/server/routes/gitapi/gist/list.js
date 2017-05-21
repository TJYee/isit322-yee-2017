let express = require('express');
let router = express.Router();
const Logger = require('../../elf-logger');
const logger = new Logger('gist');
let auth = require('../getGitHub');

router.get('/', function (request, response) {
    const me = auth().getUser();
    me.listGists()
        .then(function ({data}) {
            logger.log('USER PROMISE', data);
            const results = data.map((gist) => {
                return {
                    description: gist.description,
                    git_pull_url: gist.git_pull_url,
                    html_url: gist.html_url,
                    id: gist.id,
                    url: gist.url
                }
            });
            response.status(200).send({
                'count': results.length,
                'result': results
            });
        }).catch(function (err) {
        logger.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;