let express = require('express');
let router = express.Router();
const ElfLogger = require('./elf-logger');
const logger = new ElfLogger('index');

router.use('/foo', require('./foo'));

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

module.exports = router;