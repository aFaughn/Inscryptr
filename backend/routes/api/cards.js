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

router.post('/cards', asyncHandler(async(req,res) => {
    /*
        Destructure payload
        use Card.create to create new card
    */
   res.cookie('XSRF-TOKEN', req.csrfToken());
   await setTokenCookie(res, user)
    const {
        userId,
        name,
        cost,
        costType,
        tribe,
        image,
        description
    } = req.body

    const card = await Card.create({
        userId,
        name,
        tribe,
        image,
        cost,
        costType,
        description
    })
}))

module.exports = router;
