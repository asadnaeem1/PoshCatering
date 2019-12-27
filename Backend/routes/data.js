const express = require('express');
const router = express.Router();
const CateringProvider = require('../models/CateringProvider');

router.get('/partners', (req, res)=>{
    res.status(200);
    CateringProvider.find({}).then((_res)=>{
        res.json(_res)
    }).catch((err)=>{
        console.log(err);
        res.status(500);
    })
})

router.get('/partners/:id', (req,res)=>{
    res.status(200);
    CateringProvider.findById(req.params.id).then((_res)=>{
        res.json(_res);
    }).catch((err)=>{
        console.log(err);
        res.status(500);
    })
})

module.exports = router;