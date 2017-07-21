var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', function(req, res, next) {
  console.log('trying to find the error view');
  res.render('error', { title: 'Error Page' });
  // res.send('respond with a resource');
});

module.exports = router;
