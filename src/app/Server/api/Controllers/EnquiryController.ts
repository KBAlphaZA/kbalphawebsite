//var CustomerEnquiry = require( '../../dao/CustomerEnquiry');
//var EnquiryDAO = require('../../dao/enquiryDAO');
const express = require('express');
const router = express.Router();

router.post('/post', (req, res) => {
  //fill in data
  const CustomerName = req.body.name;
  const CustomerEmail = req.body.email;
  const date = Date.now();

  //FILTER
  const filter = {};
  // UPDATE
  if (req.body == null)
    res.send({ 'Error Message': 'There is no data to process' });

  //VALIDATE DATA
  CustomerLead.findOne({ email: req.body.email }).then((customer) => {
    if (customer)
      res.send({
        reason: 'Customer email already exists',
        result: false,
      });
    //example data is added below
    //The data maps 1:1 if the names match so this eg. {Name: Name} is the same as just { Name }
    const newCustomer = new CustomerLead({
      CustomerName,
      CustomerEmail,
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
/**
export class EnquiryController {
   private customerEnquiry;//: CustomerEnquiry;

   static async apiEnquirylodege(req, res, next){
     // attempt to post the enquiry to the data base
     try{
        const enquiry = req.body.customerEnquiry;
        res.json({status: 'sucess', enquiry});

        const postEnquiry = await EnquiryDAO.postEnquiry(enquiry);
        
     }
     catch (e){
       console.log();
       return console.error('Trying to post the customers info failed:' + e);
     }
     
   }

 }
 */
module.exports = router;
