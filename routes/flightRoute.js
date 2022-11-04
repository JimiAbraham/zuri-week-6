const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.allFlight);


router.post('/book', controller.bookFlight);


router.get('/', controller.allFlight);



router.get('/booking', controller.singleFlight);


router.get('/update-booking', controller.updateFlight);



router.get('/delete-booking', controller.deleteFlight);





module.exports = router;