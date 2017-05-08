var fs = require("fs");
var debug = require('debug')('git-convert');
debug('Debugger is on.');

function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

readFile('./git-user.json').then(function (text) {
    // CODE OMITTED. This is where you solve the core of the assignment.
    debug('Promise Resolved');
    debug(text);
    var json = JSON.parse(text.result);
    //debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));

    for (var property in json) {

    }


    /*for (var property in json) {
     if (json.hasOwnProperty(property)) {
     // YOUR WORK HERE
     console.log("it('renders default message for " + property);
     console.log('\tgetDefault("' + property + '-unkown", ');
     console.log('});\n');

     var propertyValue = json[property] || '';

     console.log("it('renders default click message for " + property);
     if(typeof property === 'number') {
     console.log('\tgetDefaultClick(' + propertyValue );
     }else {
     console.log('\tgetDefaultClick(' + propertyValue );
     }
     console.log('});\n');
     }
     }*/
    console.log('blah');
}).catch(
    (reason) => {
        debug('Rejected for reason: ' + reason);
    }
);