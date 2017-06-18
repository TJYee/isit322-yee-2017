let express = require('express');
let router = express.Router();
const requester = require('request');
const ElfLogger = require('./elf-logger');
const logger = new ElfLogger('index');

router.use('/foo', require('./foo'));

/* Micro Services */

// gist Calls
router.get('/gist', function (req, res, next) {
    requester('http://localhost:30030').pipe(res);
});

router.get('/gitapi/gist/gist-create', function (req, res, next) {
    requester('http://localhost:30030/create').pipe(res);
});

router.get('/gitapi/gist/get-basic-list', function (req, res, next) {
    requester('http://localhost:30030/list').pipe(res);
});

router.get('/gist/you-rang', function (req, res, next) {
    requester('http://localhost:30030/you-rang').pipe(res);
});

// git-socket Calls
router.get('/git-socket', function (req, res, next) {
    requester('http://localhost:30031').pipe(res);
});

router.get('/git-socket/you-rang', function (req, res, next) {
    requester('http://localhost:30031/you-rang').pipe(res);
});

// git-user Calls
router.get('/git-user', function (req, res, next) {
    requester('http://localhost:30032').pipe(res);
});

router.get('/gitapi/user', function (req, res, next) {
    requester('http://localhost:30032/user').pipe(res);
});

router.get('/git-user/you-rang', function (req, res, next) {
    requester('http://localhost:30032/you-rang').pipe(res);
});

// markdown Calls
router.get('/markdown', function (req, res, next) {
    requester('http://localhost:30033').pipe(res);
});

router.get('/markdown/you-rang', function (req, res, next) {
    requester('http://localhost:30033/you-rang').pipe(res);
});

// qux Calls
router.get('/qux', function (req, res, next) {
    requester('http://localhost:30034').pipe(res);
});

router.get('/qux/you-rang', function (req, res, next) {
    requester('http://localhost:30034/you-rang').pipe(res);
});
/* End of Micro Services */

/* GET home page. */
/*router.get('/', function(req, res, next) {
 'use strict';
 res.render('index', {title: 'server'});
 });*/

router.get('/', function (req, res, next) {
    'use strict';
    res.status(200).sendFile('index.html');
});

router.get('/:id', function (request, response) {
    response.send({
        'result': 'success from 30026',
        'path': request.params.id
    });
});

module.exports = router;
