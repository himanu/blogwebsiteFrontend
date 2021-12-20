const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build/')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.post('/addBlog',(req,res,next)=>{
    console.log('req is ', req);
})

app.listen(4000,()=>{
    console.log("Server is on");
})