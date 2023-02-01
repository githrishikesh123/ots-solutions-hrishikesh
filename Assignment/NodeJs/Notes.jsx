/*
userDB
userDB123


POST = Create NEW record
        create new resource at Database. It means it adds new data.
        [ Create in CRUD ]

PUT = If the record exists, update else, create a new record
        [ Update in CRUD ]

PATCH = update
        [ Update in CRUD ]

GET = read;
        Get the data from server and show it to user

DELETE = delete;

*/


/*
PUT===>
        If we want to change the first name then we send a put request for Update

        { "first": "Michael
        ", "last": "Angelo" }

        Here, although we are only changing the first name, with PUT request we have to send both parameters 
        first and last.

        In other words, it is mandatory to send all values again, the full payload.


PATCH===>
        When we send a PATCH request, however, we only send the data which we want to update.
        In other words, we only send the first name to update, no need to send the last name.
*/


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

// ======================================================== Netlify 

folder => dist
		index.html

at root => netlify.toml

[build]
	functions = "functions"



script =>
	start : "./



app.use("/.netlify/functions/api", router)

import express from "express";
import serverless from "serverless-http";

const app = express()
const router = express.Router()

router.get('/users', (req,res)=>{
    res.send(" getting Users")
})

 app.use('/.netlify/functions/api' , router);

 module.exports.handler = serverless(app) 