const express = require('express');
const fs = require('fs');
const router = express.Router();

router.use('/', (req, res) => {
    let chat;
    if(fs.existsSync('message.txt'))
        {
           chat = fs.readFileSync('message.txt','utf-8')
        }
    res.send(`
        <html>
            <head>
                <title>Simple Group Chat Application</title>
            </head>
            <body>
                <p>${chat}</p>
                <h1>Welcome to Simple Group Chat Application</h1>
                <form action="/submit-message" method="POST" onsubmit="event.target.elements['name'].value = localStorage.getItem('username')">
                     <input type="hidden" name="name" required>
                     <textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea><br>
                    <button type="submit">Send Message</button>
                </form>
            </body>
        </html>
    `);
});

module.exports=router;