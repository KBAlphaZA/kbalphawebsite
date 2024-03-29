//var CustomerEnquiry = require( '../../dao/CustomerEnquiry');
//var EnquiryDAO = require('../../dao/enquiryDAO');
var express = require('express');
var router = express.Router();
var Customer = require('../../Models/CustomerLead.ts');
//GET: /api/v1/customer/registered'
router.get('/registered', function (req, res) {
    res.send({ "Message": "successful" });
});
//POST: /api/v1/customer/register'
router.post('/register', function (req, res) {
    //fill in data
    console.log('Server data recieved => ', req);
    var CustomerName = req.body.name;
    var CustomerEmail = req.body.email;
    var date = Date.now();
    //FILTER
    var filter = {};
    // UPDATE
    if (req.body == null)
        res.send({ 'Error Message': 'There is no data to process' });
    //VALIDATE DATA
    Customer.findOne({ email: req.body.email }).then(function (customer) {
        if (customer == req.body.email)
            res.send({
                'reason': 'Customer email already exists',
                'result': false
            });
        //example data is added below
        //The data maps 1:1 if the names match so this eg. {Name: Name} is the same as just { Name }
        var newCustomer = new Customer({
            CustomerName: CustomerName,
            CustomerEmail: CustomerEmail,
            date: date
        }); //etc
        //RESPONSE & Database Access
        newCustomer
            .save()
            .then(function (customer) {
            //show that the customer has been stored on the db
            //page should have a UI element/refresh the page
            res.send({
                result: true
            });
        })["catch"](function (err) {
            console.log(err);
            res.send({
                result: false
            });
        });
    });
});
module.exports = router;
