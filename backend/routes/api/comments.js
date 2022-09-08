const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models')

const {setTokenCookie} = require('../../utils/auth')

//Get All Comments
router.get('/', asyncHandler(async(req,res) => {
    const comments = await Comment.findAll({
        order: [['createdAt', 'DESC']]
    });
    console.log('HELLO FROM GET ALL COMMENTS')
    return res.json(comments)
}))

//Get comments by UserId
router.get('/:userId(\\d+)', asyncHandler(async(req,res) => {
    const comments = await Comment.findAll({
        where: {
            userId: req.params.userId
        }
    })
    return res.json(comments)
}))

//Submit changes to comment
router.patch('/:id(\\d+)', asyncHandler(async(req,res) => {
    const details = {
        userId,
        cardId,
        comment
    } = req.body

    const comment = await Comment.findByPk(id);
    await comment.update({
        userId: userId,
        cardId: cardId,
        comment: comment
    })
    res.json({})
}));

//Create a new comment
router.post('/', asyncHandler(async(req,res) => {
    const {
        userId,
        cardId,
        comment
    } = req.body

    const newComment = await Comment.create({
        userId: userId,
        cardId: cardId,
        comment: comment
    })
    return res.json(newComment)
}))

//Delete a comment
router.delete('/:id', asyncHandler(async(req,res) => {
    const id = req.params.id
    const comment = await Comment.findByPk(id);
    if (comment) {
        await card.destroy();
        return res.json({"message":"Deleted Succesfully"})
    } else {
        return res.json({"message":"Error thrown in backend at routes/api/comments.js @ Delete Comment"})
    }
}))

module.exports = router;
