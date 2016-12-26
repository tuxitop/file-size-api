/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tuxitop File Size API',
                          baseURL: req.get('host')});
});

module.exports = router;
