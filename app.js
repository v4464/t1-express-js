
const http=require('http');
const express=require('express');
const app=express();

app.use((req,res,next) => {
    console.log("in the middleware");
    next();
})
app.use((req,res,next) => {
    console.log("in another middleware");
    res.send('<h1>welcome to node.js</h1>');
})

app.listen(3000)