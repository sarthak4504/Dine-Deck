const express=require('express');
const { testUserController } = require('../controllers/testController');

//router object
const router=express.Router();

//test route
router.get("/test-user",testUserController);

//exporting router
module.exports=router;