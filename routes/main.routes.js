
const router  =require('express').Router();
const path =require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname , '../public/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname , '../public/login.html'));
});

module.exports= router;
