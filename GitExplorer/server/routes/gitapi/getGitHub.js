let GitHub = require('github-api');
let getGitHub = function () {
    let gh;
    if (true) {
        gh = new GitHub({
            token: process.env.GHTOKEN
        });
    } else {
        gh = new GitHub({
            username: '',
            password: ''
        });
    }
    return gh;
};

module.exports = getGitHub;