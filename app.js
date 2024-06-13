const express = require('express');
const app = express();

app.use((req,res,next)=>
    {
        console.log("in side middle ware");
        res.send('<h1>Hello from Express</h1>');
    })
app.listen(4001);