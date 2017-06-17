var express = require('express');
var router = express.Router();

router.use('/you-rang', require('./you-rang'));
router.use('/user', require('./user'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'git-user'});
});

router.get('/:id', function (request, response) {
    response.send({
        'result': 'success from 30032',
        'path': request.params.id
    });
});

module.exports = router;
