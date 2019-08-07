const express=require('express');
const router=express.Router();
const todosRoutes=require('./todos.routes');
const mainRoutes=require('./main.routes');


router.use('/',mainRoutes);
router.use('/todos',todosRoutes);

module.exports=router;