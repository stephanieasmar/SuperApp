var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', {
    user: 'Steph',
    title: 'my website',
    message: 'Hello there'
  });
});

module.exports = router;
