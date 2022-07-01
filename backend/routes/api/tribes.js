const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');


const { Tribe, Card } = require('../../db/models');

//Get all tribes
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

//GET one tribe
router.get('/:id(\\d+)', asyncHandler(async(req,res) => {
    const tribe = await Tribe.findByPk(req.params.id);
    const tribeArr = [];
    tribeArr.push(tribe);
    if (tribeArr) {
        return res.json(tribeArr)
    }
}))

//Create new tribe
router.post('/', asyncHandler(async(req,res) => {

    const {
        userId,
        name,
        image,
    } = req.body

    const tribe = await Tribe.create({
        userId: userId,
        title: name,
        tribeIcon: image,
    })
    return res.json(tribe);
}))

//Update existing tribe
router.put('/:id(\\d+)', asyncHandler(async(req,res) => {
    const {
        id,
        image,
        name,
        userId
    } = req.body

    const tribe = await Tribe.findByPk(id);
    await tribe.update({
        userId: userId,
        title: name,
        tribeIcon: image,
    })
    res.json({})
}));


module.exports = router;
