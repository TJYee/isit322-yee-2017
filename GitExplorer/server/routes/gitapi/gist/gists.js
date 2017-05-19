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
    let gh = getGitHub();
    const me = gh.getUser();
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