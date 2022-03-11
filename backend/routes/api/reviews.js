const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')


const router = express.Router();

//get all reviews
router.get(
    '/allReviews',
    asyncHandler(async function (req, res) {
        const reviews = await Review.findAll();
        res.json(reviews);
    })
);

//get all reviews for one business
router.get(
    '/:id',
    asyncHandler(async function (req, res) {
        const businessId = +req.params.id
        const reviews = await Review.findAll({
            where: {
                businessId: businessId
            }
        })
        return res.json(reviews);
    })
)

module.exports = router;