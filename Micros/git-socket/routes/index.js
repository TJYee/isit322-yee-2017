var express = require('express');
var router = express.Router();

router.use('/you-rang', require('./you-rang'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'git-socket'});
});

router.get('/:id', function (request, response) {
    response.send({
        'result': 'success from 30031',
        'path': request.params.id
    });
});

module.exports = router;
