const express = require('express');
const router = express.Router();
const {getHomePage,getABC,getHoiDanIT,postCreateUser,getRequestPage} = require('../controllers/homeControllers');

//Khai bao route
router.get('/',getHomePage);

router.get('/abc',getABC);

router.get('/owen',getHoiDanIT);

router.get('/create',getRequestPage);


router.post('/create-user',postCreateUser);


module.exports = router;