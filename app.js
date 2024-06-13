const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product',(req,res,next)=>
    {
        res.send(`<html>
                  <head>
                      <title> add porduct</title>
                  </head>
                  <body>
                       <form action="/product" method="POST">
                        name<input type="text" name="tittle"></input>
                        <br>size<input type="number" name="size"></input>
                        <button type="submit">submit</button>
                       </form>
                  </body>
                 </html>`);
    });


    app.use('/product', (req, res, next) => {
        console.log(req.body); 
       res.redirect('/');
    });
app.use('/',(req,res,next)=>
    {
       
        res.send('<h1>Hello from Express</h1>');
    })
app.listen(4001); 