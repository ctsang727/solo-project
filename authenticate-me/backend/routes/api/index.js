const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./businesses.js')
const reviewsRouter = require('./reviews')
const photosRouter = require('./reviews')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/business', businessRouter);

router.use('/reviews', reviewsRouter)

router.use('/photos', photosRouter)



// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

module.exports = router;