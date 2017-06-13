let express = require('express');
let router = express.Router();
const ElfLogger = require('./elf-logger');
const logger = new ElfLogger('index');

router.use('/foo', require('./foo'));

/* GET home page. */
/*router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});*/

router.get('/', function(req, res, next) {
    'use strict';
    res.status(200).sendFile('index.html');
});

router.get('/:id', function(request, response) {
    response.send({
        'result': 'success from 30026',
        'path': request.params.id
    });
});

module.exports = router;
