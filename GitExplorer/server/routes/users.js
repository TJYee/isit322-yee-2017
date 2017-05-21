let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 'use strict';
  res.send('respond with a resource');
});

module.exports = router;
