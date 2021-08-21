const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//POST back to data
router.post('/', (req, res) => {
    
    let sqlQuery =`
       INSERT INTO "feedback"
       ("feeling", "understanding", "support", "comments")
       VALUE 
       ($1, $2, $3, $4)
       `;
       let sqlParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    pool.query(sqlQuery, sqlParams).then((response) => {
        console.log(response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('POSTerror is', error);
        res.sendStatus(500);
    })
})

module.exports = router;