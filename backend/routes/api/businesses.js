const express = require('express');
const asyncHandler = require('express-async-handler');

//require models
const { Business } = require('../../db/models');

const router = express.Router();

//dont really need, this will find all businesses in db
// router.get(
//     '/businesses',
//     asyncHandler(async function (req, res) {
//       const businesses = await Business.findAll();
//       //console.log('from the api', businesses)
//       res.json(businesses);
//     // const id = +req.params.id;
//     // console.log('inside backend')
//     // const business = await Business.scope('detailed').findByPk(id);
//     // return res.json(business);
// })
// );

//get single business
router.get(
  '/:id(\\d+)',
  asyncHandler(async function (req, res) {
    const id = req.params.id
    console.log('FROM API!!!!!!!!', id)
    const business = await Business.findByPk(id);
    return res.json(business);
  })
)


router.post(
  '/new', asyncHandler(async (req, res) => {
    console.log('INSIDE POST ROUTE')
    const business = await Business.create(req.body);
    res.json(business);
  }));

//edit business
router.put(
  '/edit/:id',
  asyncHandler(async function (req, res) {
    const id = req.body
    console.log('HHEELLOOO???', id);
    await Business.update(req.body, {
      where: { id },
      returning: true,
      
    });

    const editbusiness = await Business.findByPk(id);
    console.log('@@@@@@@',editbusiness)

    return res.json(business);
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