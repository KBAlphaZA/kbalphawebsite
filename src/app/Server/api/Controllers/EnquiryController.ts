//var CustomerEnquiry = require( '../../dao/CustomerEnquiry');
//var EnquiryDAO = require('../../dao/enquiryDAO');
var express = require('express');
const router = express.Router();
const Customer = require('../../Models/CustomerLead.ts');


//GET: /api/v1/customer/registered'
router.get('/registered', (req,res) => {
  res.send({ "Message":"successful" });
});


//POST: /api/v1/customer/register'
router.post('/register', (req, res) => {
  //fill in data
  console.log('Server data recieved => ',req)
  const CustomerName = req.body.name;
  const CustomerEmail = req.body.email;
  const date = Date.now();
  //FILTER
  const filter = {};
  // UPDATE
  if (req.body == null)
    res.send({ 'Error Message': 'There is no data to process' });

  //VALIDATE DATA
  Customer.findOne({ email: req.body.email }).then((customer) => {
    if (customer == req.body.email)
      res.send({
        'reason': 'Customer email already exists',
        'result': false,
      });
    //example data is added below
    //The data maps 1:1 if the names match so this eg. {Name: Name} is the same as just { Name }
    const newCustomer = new Customer({
      CustomerName,
      CustomerEmail,
      date
    }); //etc
    //RESPONSE & Database Access
    newCustomer
      .save()
      .then((customer) => {
        //show that the customer has been stored on the db
        //page should have a UI element/refresh the page
        res.send({
          result: true,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          result: false,
        });
      });
  });
});



module.exports = router;
