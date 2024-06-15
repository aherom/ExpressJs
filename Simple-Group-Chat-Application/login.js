const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Simple Group Chat Application</title>
            </head>
            <body>
                <h1>Enter Username</h1>
                <form id="loginForm" action="/" method="POST" onsubmit="
                localStorage.setItem('username', event.target.name.value) ; 
                ">
                    <input type="text" name="name" required>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

module.exports= router;