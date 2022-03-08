const express = require('express');
const asyncHandler = require('express-async-handler');

//require models
const { Business } = require('../../db/models');

const router = express.Router();

router.get(
    '/businesses',
    asyncHandler(async function (req, res) {
      const businesses = await Business.findAll();
      console.log('from the api', businesses)
      res.json(businesses);
    // const id = +req.params.id;
    // console.log('inside backend')
    // const business = await Business.scope('detailed').findByPk(id);
    // return res.json(business);
     
})
);

module.exports = router;

















 //FROM SHARON BELOW:
        //const id = req.params.id;
    //   const businessId = parseInt(req.params.id, 10)
      //nothing console.logs
      //console.log(businessId)
    //   const business = await Business.findOne({
    //     where: {
    //         id: businessId }
    //     });
    // return res.json(business);