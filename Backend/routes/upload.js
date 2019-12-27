const express = require('express');
const passport = require('passport');
const router = express.Router();
const multer  = require('multer');
const fs  = require('fs');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) return callback(err);
            const _filename = raw.toString('hex') + path.extname(file.originalname);
            req.filename = _filename;
            callback(null, _filename);
        });
    }
});
const upload = multer({storage: storage}).single('file');

router.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong:(");
        }
        res.json({filename: req.filename});
    });
})

module.exports = router;
