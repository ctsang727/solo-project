const express = require('express');
const asyncHandler = require('express-async-handler');

const { Photo } = require('../../db/models');

// const { validateCreate, validateUpdate } = require('../../validations/businesses.')

const router = express.Router();

//GET all photos
router.get(
    '/photos',
    asyncHandler(async function (req, res) {
      const photos = await Photo.findAll();
      //console.log('from the api', photos)
      res.json(photos);
})
);

router.post(
    '/new',
     asyncHandler(async (req, res) => {
      //console.log('INSIDE POST ROUTE')
      const photo = await Photo.create(req.body);
      return res.json(photo);
    }));