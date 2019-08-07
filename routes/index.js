

const express =require('express');
const router =express.Router();
const todosRoutes=require('./todos.routes');
const mainRoutes=require('./main.routes');
const authRoutes =require('./auth.routes');

//inject main routes
router.use('/',mainRoutes);

//inject todos routes
router.use('/todos',todosRoutes);

//inject auth routes
router.use('/auth',authRoutes);

module.exports=router;
