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

//post new review for a business
router.post(
    '/new/:id', 
    asyncHandler(async (req, res) => {
        console.log('INSIDE API')
        const review = await Review.create(req.body);
        return res.json(review);
    })
);

//update review for a business

//delete review
//requireauth maybe 
router.delete(
    '/:id',
    asyncHandler(async function(req, res) {
        const reviewId = parseInt(req.params.id)
        console.log('INSIDE API', reviewId)
        const review = await Review.findByPk(reviewId)
        await review.destroy();
        return res.json(reviewId)
    })
)



module.exports = router;