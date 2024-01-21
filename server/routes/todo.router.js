const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET -- GET data from database and display onto the webpage
router.get('/', (req, res) => { // link - /api/todo
    console.log("IN GET ROUTE");
    
    let queryText = 'SELECT * FROM "to_do";';

    // Run SQL query using PG
    pool.query(queryText)
        .then((result) => {
            //send back results from the database
            res.send(result.rows);
        })
        .catch((error) => {
            // send back error
            console.log("Error in router GET route", error);
            res.sendStatus(500); // close connection
        });
});

// POST -- user's input
router.post('/', (req, res) => {
    console.log('req.body:', req.body);
    let queryText = `
        INSERT INTO "to_do" ("task")
        Values ($1);
    `;

    // Run SQL query using PG
    pool.query(queryText, [req.body.task])
        .then ((result) => {
            // Query was successful!
            res.sendStatus(201); // close connection
        })
        .catch((error) => {
            console.log("Error in Router POST Route: ", error);
            res.sendStatus(500); // close connection
        });
});

// PUT -- Upgrade!
router.put('/:id', (req, res) => {
    console.log('IN PUT ROUTE');
    let queryText = `
        UPDATE "to_do" SET "completed" = NOT "completed" WHERE "id" = $1;
    `;
    // Run SQL Query using PG
    pool.query(queryText, [req.body.id])
        .then((result) => {
            // Send back data from our database upon success
            res.sendStatus(200); // close connection
        })
        .catch((error) => {
            console.log("Error in POST Route: ", error);
            res.sendStatus(500); // close connection
        });
});

// DELETE -- Delete an item
router.delete('/:id', (req,res) => {
    console.log('req.params: ', req.params);
    const taskItem= req.params
    let queryText = `Delete FROM "to_do" WHERE "id"= $1;`;
    // Run SQL Query using PG
    pool.query(queryText, [taskItem.id])
        .then((response) => {
            res.sendStatus(200); // close connection
        })
        .catch((error) => {
            console.error('Error in DELETE: ', error);
            res.sendStatus(500); // close connection
        });
});

module.exports = router;
