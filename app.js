//npm install express --save
//nmp init


const express =require('express');
const path =require('path');


const app=express();

app.use(express.static(__dirname+'/public'));
app.get('/soheil',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/public/images/image.jpg'));
})


app.listen('7000');
console.log('app is listening on port 7000');














