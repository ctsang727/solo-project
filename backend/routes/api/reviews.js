const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')


const router = express.Router();

//get all reviews
router.get(
    '/reviews',
    asyncHandler(async function (req, res) {
        const reviews = await Review.findAll();
        res.json(reviews);
    })
);