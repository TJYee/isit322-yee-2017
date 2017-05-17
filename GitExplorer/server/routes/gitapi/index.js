let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('OK');
});

router.use('/user', require('./children/user'));
router.use('/foo', require('./children/foo'));
router.use('/gist-test', require('./children/gist-test'));
router.use('/gist-list', require('./children/gists'));

module.exports = router;
