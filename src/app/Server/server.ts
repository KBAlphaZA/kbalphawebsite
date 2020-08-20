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
//     await client.connect();

//     const database = 'PotentialClientDb';
//     const collection = 'customers';


//   }
//   catch (e){

//   }
// }

/* Mongo connection
  const database = mongoose.connect('http://localhost:4200', (err, response) => {
  if (err){console.log(err); }
  else{console.log('Connected to' + database + ' ' + response); }


  app.use(bodyParser());
app.use(bodyParser.json({limit: '7mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Orgin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});


let schema = mongoose.Schema;

app.post()
});
*/




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
