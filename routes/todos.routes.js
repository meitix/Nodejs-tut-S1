// npm install --save express-jwt

const express =require('express');
const router =express.Router();
const todosController = require('../controllers/todo');
const expressJWT=require('express-jwt');

router.use('/',expressJWT({
    secret:'jdjh83-6326%&*RTY3jjdlf*39',
    credentialsRequired:true
}));

router.post('/',todosController.create);
router.get('/',todosController.fetchAll)
router.delete('/',todosController.delete);
router.put('/', todosController.update);

module.exports =router;