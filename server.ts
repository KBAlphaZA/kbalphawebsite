var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');
var morgan = require('morgan');
var csrf  = require('csurf');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const app = express();

// Cors Setup
app.use(cors());

// Mongodb Key
const dburl ='mongodb+srv://coFounderBonga:12345@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority';



app.use(cookieParser());
app.use(csrf({ cookie: true }));

// New
// MongoDB Connection
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
// process.env.NODE_ENV !== 'prod' && 
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./dist/'));

// Routes
app.use('/api/v1/customer', require('./src/app/Server/api/Controllers/EnquiryController.ts'));

app.use(express.static('./dist/kbalphawebsite'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/kbalphawebsite' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
