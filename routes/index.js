/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage(),
                      limits: {
                          fileSize: 50000000
                      }
                    });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tuxitop File Size API',
                          baseURL: req.get('host')});
});

/* POST the file */
router.post('/', upload.single("file"), (req, res, next) => {
    res.send({
        size: req.file.size
    });
});

module.exports = router;
