var express = require('express');
var router = express.Router();
var test=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  test++;
  res.send(`User accesses are: ${test}`);
});

module.exports = router;
