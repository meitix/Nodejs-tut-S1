

const express =require('express');
const router =express.Router();
const todosRoutes=require('./todos.routes');
const mainRoutes=require('./main.routes');

//inject main routes
router.use('/',mainRoutes);

//inject todos routes
router.use('/todos',todosRoutes);

module.exports=router;
