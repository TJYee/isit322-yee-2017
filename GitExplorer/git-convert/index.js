var fs = require('fs');
var debug = require('debug')('git-convert');

debug('Debugger is on.');

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            }
        )
    });
}

readFile('git-user.json').then(function (text) {
    debug('Promise Resolved');
    debug(text);

    let json = JSON.parse(text);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));

    let output = [];

    for (let property in json) {
        if (json.hasOwnProperty(property)) {
            let object = {};
            object['id'] = property;
            object['label'] = 'user-' + property;
            object['type'] = 'paragraph';
            object['sample'] = json[property];
            output.push(object);
        }
    }

    console.log(output);
}).catch(
    (reason) => {
        debug('Rejected: ' + reason);
    }
);