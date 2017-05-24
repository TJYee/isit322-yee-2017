let express = require('express');
let router = express.Router();
const Logger = require('../../elf-logger');
const logger = new Logger(true, 'gist');
let auth = require('../getGitHub');

router.get('/', function (request, response) {
    const me = auth().getUser();
    me.listGists()
        .then(function ({data}) {
            logger.log('USER PROMISE', data);
            response.status(200).json({
                count: data.length,
                result: data.map((gist) => {
                    return {
                        avatar_url: gist.owner.avatar_url,
                        created_at: gist.created_at,
                        description: gist.description,
                        git_pull_url: gist.git_pull_url,
                        html_url: gist.html_url,
                        id: gist.owner.id,
                        ownerLogin: gist.owner.login,
                        updated_at: gist.updated_at,
                        url: gist.url
                    }
                })
            });
        }).catch((err) => {
        logger.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;