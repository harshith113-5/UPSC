const express=require('express');
const app=express();
const bodyparser = require("body-parser", { UserNewUrlparser: true });
const fs=require('fs');
const path = require("path");

const host='127.0.0.1';
const port = 8088;

app.use('/imgs', express.static('imgs'));
app.use('/views', express.static('views'));
app.set('/views',__dirname,'views')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../upsc','views','home.html'));
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../upsc','views','home.html'));
})
app.get('/material',(req,res)=>{
    res.sendFile(path.join(__dirname,'../upsc','views','ncert.html'));
})
app.get('/sand',(req,res)=>{
    res.sendFile(path.join(__dirname,'../upsc','views','syllabus_pattern.html'));
})

app.listen(port, () => {
    console.log(`success http://${host}:${port}`);
});