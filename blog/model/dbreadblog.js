const db = require('../util/database'); 
const funcreaddlog = function (req,res)
{
    db.execute('SELECT * FROM Blogs')
        .then(result => {
            res.json(result[0]);
        })
        .catch(error => {
            res.status(500).send('Failed to fetch blog posts.');
            console.error(error);
        });
}

module.exports={funcreaddlog};