var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AZ300WebApp-NodeWebapp######SlotTest99999' });
});

module.exports = router;
