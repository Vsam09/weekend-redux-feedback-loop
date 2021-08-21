const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET the database information
router.get('/', (req, res) => {
    console.log('GET /api/survey');
    pool.query('SELECT * FROM "feedback";').then((dbRes) => {
        res.send(dbRes.rows);
    }).catch((error) => {
    console.log('GET survey router error', error)
    })
})

module.exports = router;