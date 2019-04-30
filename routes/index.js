var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AZ300WebApp-NodeWebapp######SlotTest888888888888' });
});

module.exports = router;
