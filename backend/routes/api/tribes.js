const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Tribe } = require('../../db/models');

router.get('/', asyncHandler(async(req,res) => {
    const tribes = await Tribe.findAll({
        order: [ ['title', 'DESC' ]]
    });
    return res.json(tribes)
}))

module.exports = router;
