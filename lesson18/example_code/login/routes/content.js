var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/content', function(req, res) {
  res.render('content', { title: 'Express' });
});

module.exports = router;
