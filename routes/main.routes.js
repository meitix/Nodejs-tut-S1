const router =require('express').Router();
const path=require('path');


router.get('/image', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../public/image/image.jpg'));
})


module.exports=router;