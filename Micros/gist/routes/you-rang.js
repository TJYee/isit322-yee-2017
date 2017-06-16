let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        'result': 'success',
        'message': 'gist is up and running'
    });
});

module.exports = router;