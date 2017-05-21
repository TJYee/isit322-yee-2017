let express = require('express');
let router = express.Router();
const Logger = require('./elf-logger');
const logger = new Logger('routes');

router.use('/foo', require('./foo'));

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

module.exports = router;