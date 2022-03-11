const express = require('express');
const asyncHandler = require('express-async-handler');


//require models
const { Business } = require('../../db/models');

const { validateCreate } = require('../../validations/businesses.')

const router = express.Router();

//GET all businesses
router.get(
    '/businesses',
    asyncHandler(async function (req, res) {
      const businesses = await Business.findAll();
      //console.log('from the api', businesses)
      res.json(businesses);
})
);

//get single business
router.get(
  '/:id',
  asyncHandler(async function (req, res) {
    const id = +req.params.id
    // console.log('FROM API!!!!!!!!', id)
    const business = await Business.findByPk(id);
    return res.json(business);
  })
)


router.post(
  '/new', validateCreate,
   asyncHandler(async (req, res) => {
    //console.log('INSIDE POST ROUTE')
    const business = await Business.create(req.body);
    return res.json(business);
  }));

//edit business
router.put(
  '/edit/:id',
  asyncHandler(async function (req, res) {
    const id = parseInt(req.params.id)
    const editbusiness = await Business.update(req.body, {
      where: { id },
      returning: true, //makes query return number of rows edited and edited row
      
    });
    return res.json(editbusiness);
  })
);

//delete business
router.delete(
  '/:id',
  asyncHandler(async function (req, res) {
    const business = await Business.findByPk(req.params.id)
    await Business.destroy ({ where: {id: business.id }})
    return res.json({ id: business.id })
    
    // const id = +req.params.id 
    // console.log('IN API', id)
    // const deletebusiness = await Business.destroy({
    //   where: { id: id }
    // });
    // console.log('INNSIDE API', deletebusiness)
    // return res.json(deletebusiness)
    
  })
)

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