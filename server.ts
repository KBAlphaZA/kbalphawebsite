var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//var enquiry = require("../Server/api/Controllers/Enquiry.route")
const mongoose = require('mongoose');

const app = express();

//cors setup

//mongodb
const dburl =
  'mongodb+srv://coFounderBonga:12345@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority';
//Mongo Connection

mongoose
  .connect(dburl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log('Could not connect \n :', err);
  });

app.use(cors());
process.env.NODE_ENV !== 'prod' && app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace the '/dist/<to_your_project_name>'

app.use(express.static('./dist/'));
//routes
app.use(
  '/api/v1',
  require('./src/app/Server/api/Controllers/EnquiryController.ts')
);

app.use(express.static('./dist/kbalphawebsite'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/kbalphawebsite' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
