const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');


const { Tribe, Card } = require('../../db/models');

router.get('/', asyncHandler(async(req,res) => {
    const tribes = await Tribe.findAll({
        order: [ ['title', 'DESC' ]]
    });
    return res.json(tribes)
}))

//Get cards that belong to a specific tribe
router.get('/:tribeId(\\d+)/cards', asyncHandler(async(req,res) => {
    console.log(req.params.tribeId);
    const tribeId = req.params.tribeId
    const cards = await Card.findAll({where: { tribeId}})
    if (cards) {
        return res.json(cards)
    }
}))


module.exports = router;
