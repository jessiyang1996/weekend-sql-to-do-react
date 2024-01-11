const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET -- GET data from database and display onto the webpage
router.get('/', (req, res) => { // link - /api/todo
    console.log("IN GET ROUTE");
    
    let queryText = 'SELECT * FROM "to-do";';

    // Run SQL query using PG
    pool.query(queryText)
        .then((result) => {
            //send back results from the database
            res.send(result.rows);
        })
        .catch((error) => {
            // send back error
            console.log("Error in router GET route", error);
            res.sendStatus(500);
        });
});

// POST -- user's input


// PUT -- Upgrade!

// DELETE -- Delete an item

module.exports = router;
