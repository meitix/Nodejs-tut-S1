
const router  =require('express').Router();


router.get('/mahdi', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../public/images/image.jpg'));
});

module.exports=router;
