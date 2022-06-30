const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Tribe } = require('../../db/models');

router.get('/', asyncHandler(async(req,res) => {
    return res.json({})
}))

module.exports = router;
