var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
})

router.get('/hello', (req, res) => {
  res.send("Hello Hello")
})

router.all('/test', (req, res) => {
  res.send("Http method dont have any effect");
})

module.exports = router