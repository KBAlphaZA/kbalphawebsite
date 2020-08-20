import { async } from "@angular/core/testing";
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 4200;
const { MongoClient } = require('mongodb');


// Connect toit the Database
// async function run(){
//   // attempt to establish a connection
//   try{
//     await MongoClient.connect(process.env.KB_ALPHA_DB_URI);

//     const database = 'PotentialClientDb';
//     const collection = 'customers';


//   }
//   catch (e){

//   }
// }


const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/kbalphawebsite'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/*', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/dist/kbalphawebsite/index.html'));
});


app.listen(process.env.PORT || 4200);

// Register api routes
app.use('/api/postEnquiry', );
