var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
    res.send('hello on home');
})

module.exports = router;