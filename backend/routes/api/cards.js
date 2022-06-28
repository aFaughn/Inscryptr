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

//create a new card
router.post('/', asyncHandler(async(req,res) => {
    /*
        Destructure payload
        use Card.create to create new card
    */
    const {
        userId,
        name,
        cost,
        costType,
        tribe,
        image,
        description
    } = req.body
    console.log(`RECIEVED PAYLOAD: ${userId}, ${name}, ${cost}, ${costType}, ${tribe}, ${image}, ${description}`);
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

module.exports = router;
