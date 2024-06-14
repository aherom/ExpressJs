const express =require('express');
const router = express.Router();


   router.use('/add-product',(req,res,next)=>
    {
        res.send(`<html>
                  <head>
                      <title> add porduct</title>
                  </head>
                  <body>
                       <form action="/admin/product" method="POST">
                        name<input type="text" name="tittle"></input>
                        <br>size<input type="number" name="size"></input>
                        <button type="submit">submit</button>
                       </form>
                  </body>
                 </html>`);
    });


    router.post('/product', (req, res, next) => {
        console.log(req.body); 
       res.redirect('/welcome');
    });

    module.exports=router;