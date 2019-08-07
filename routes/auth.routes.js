const router  =require('express').Router();
const controller =require('../controllers/users');


router.post('/login',controller.login);
router.post('/register',controller.register);

module.exports=router;