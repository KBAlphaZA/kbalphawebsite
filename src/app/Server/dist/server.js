"use strict";
exports.__esModule = true;
var path = require('path');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
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
//const dburl = process.env.KB_ALPHA_DB_URI
//const dburl = 'mongodb+srv://coFounderKhanyi:TW0d53RQiYW9gegb@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority'
var dburl = 'mongodb+srv://coFounderBonga:12345@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority';
mongoose.connect(dburl, {
    useNewUrlParser: true
})
    .then(function () {
    console.log('Mongo DB Connected.....');
})["catch"](function (err) {
    console.log('Could not connect to mongo:', err);
});
var app = express();
// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/kbalphawebsite'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/postEnquiry', require('./api/Controllers/Enquiry.route.ts'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/kbalphawebsite/index.html'));
});
app.listen(process.env.PORT || 8000);
console.log('Running on port number:', 8000);
exports["default"] = app;
// Register api routes
//
