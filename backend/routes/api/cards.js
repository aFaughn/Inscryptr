const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Card } = require('../../db/models')


//Get All Cards in the DB
router.get('/', asyncHandler(async(req,res) => {
        const cards = await Card.findAll({
            order: [ ['name', 'DESC' ]]
        });
        return res.json(cards)
    })
)

module.exports = router;
