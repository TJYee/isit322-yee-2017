let GitHub = require('github-api');
let getGitHub = function () {
    let gh;
    // GitHub Token with Gist permissions
    let gitToken = process.env.GHTOKEN;
    if (gitToken !== undefined && gitToken !== '') {
        gh = new GitHub({
            token: gitToken
        });
    } else {
        throw ('Need valid GHTOKEN definition! Please export GHTOKEN=[TOKEN HERE]');
    }
    return gh;
};

module.exports = getGitHub;