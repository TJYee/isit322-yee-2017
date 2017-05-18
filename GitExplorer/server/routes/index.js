var express = require('express');
var router = express.Router();
const Logger = require('./elf-logger');
const logger = new Logger('routes');

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

router.use('/foo', require('./foo'));

module.exports = router;
