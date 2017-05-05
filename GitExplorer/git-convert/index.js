var fs=require("fs");

function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile( /*YOUR CODE HERE*/ );
    });
}

readFile('git-user.json').then(function(text) {
    // CODE OMITTED. This is where you solve the core of the assignment.
    debug(text);
    var json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    var index = 0;
    for (var property in json) {
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
    }
    console.log( /* LOG YOUR ARRAY OF OBJECTS */)
});