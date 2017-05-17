let express = require('express');
let router = express.Router();
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
router.get('/', function (request, response) {
    let gh = getGitHub();
    const me = gh.getUser('TJYee');
    me.listGists()
        .then(function ({gistList}) {
            console.log('USER PROMISE', gistList);
            const results = gistList.map((gist) => {
                return {
                    gist
                }
            });
            response.status(200).send({
                'count': results.length,
                'result': results
            });
        }).catch(function (err) {
        console.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;