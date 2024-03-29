const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Card } = require('../../db/models')

const {setTokenCookie} = require('../../utils/auth')

//Get All Cards in the DB
router.get('/', asyncHandler(async(req,res) => {
        const cards = await Card.findAll({
            order: [ ['name', 'DESC' ]]
        });
        return res.json(cards)
    })
)

//Get One Card
router.get('/:id(\\d+)', asyncHandler(async(req,res) => {
    const card = await Card.findByPk(req.params.id);
    const cardArr = [];
    cardArr.push(card);
    if (cardArr) {
        return res.json(cardArr)
    }
}))

//Get card by TribeId


//Submit changes to card
router.patch('/:id(\\d+)', asyncHandler(async(req,res) => {
    const details = {
        cost,
        costType,
        description,
        id,
        image,
        name,
        tribe,
        userId
    } = req.body

    const card = await Card.findByPk(id);
    await card.update({
        userId: userId,
        name: name,
        tribeId: tribe,
        imageUrl: image,
        cost: cost,
        costType: costType,
        description: description
    })
    res.json({})
}));


//create a new card
router.post('/', asyncHandler(async(req,res) => {

    const {
        userId,
        name,
        cost,
        costType,
        tribe,
        image,
        description
    } = req.body
    // console.log(`RECIEVED PAYLOAD: ${userId}, ${name}, ${cost}, ${costType}, ${tribe}, ${image}, ${description}`);
    const card = await Card.create({
        userId: userId,
        name: name,
        tribeId: tribe,
        imageUrl: image,
        cost: cost,
        costType: costType,
        description: description
    })
    console.log(card);
    return res.json(card);
}))

//Delete a card
router.delete('/:cardId', asyncHandler(async(req,res) => {
    const cardId = req.params.cardId
    const card = await Card.findByPk(cardId)
    if (card) {
        await card.destroy();
        return res.json({"message":"Deleted"})
    } else {
        return res.json({"message":"Something went wrong"})
    }

}))

module.exports = router;
