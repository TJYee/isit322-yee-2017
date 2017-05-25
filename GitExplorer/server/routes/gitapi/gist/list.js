let express = require('express');
let router = express.Router();
const ElfLogger = require('../../elf-logger');
const logger = new ElfLogger('gist');
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
                        'avatarUrl': gist.owner.avatar_url,
                        'createdAt': gist.created_at,
                        'description': gist.description,
                        'gitPullUrl': gist.git_pull_url,
                        'htmlUrl': gist.html_url,
                        'id': gist.owner.id,
                        'ownerLogin': gist.owner.login,
                        'updatedAt': gist.updated_at,
                        'url': gist.url
                    };
                })
            });
        }).catch((err) => {
        logger.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;