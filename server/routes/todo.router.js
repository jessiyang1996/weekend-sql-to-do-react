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
router.post('/', (req, res) => {
    console.log('req.body:', req.body);
    let queryText = `
        INSERT INTO "to_do" ("title", "description")
        Values ($1, $2);
    `;

    // Run SQL query using PG
    pool.query(queryText, [req.body.title, req.body.description])
        .then ((result) => {
            // Query was successful!
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("Error in Router POST Route: ", error);
            res.sendStatus(500);
        });
});

// PUT -- Upgrade!
router.put('/:id', (req, res) => {
    console.log('IN PUT ROUTE');
    let queryText = `
        UPDATE "to_do" SET "completed" = $1 WHERE "id" = $2;
    `;
    // Run SQL Query using PG
    pool.query(queryText, [req.body.completed, req.body.id])
        .then((result) => {
            // Send back data from our database upon success
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log("Error in POST Route: ", error);
            res.sendStatus(500);
        });
});

// DELETE -- Delete an item


module.exports = router;
