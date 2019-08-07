const express =require('express');
const router=express.Router();
const todosController=require('../controllers/todo');

router.post('/', todosController.create);
router.get('/', todosController.fetchAll);
router.delete('/',todosController.delete );
router.put('/',todosController.update );

module.exports=router;
