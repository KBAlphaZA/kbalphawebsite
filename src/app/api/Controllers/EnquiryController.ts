// import * as express from 'express';
import { CustomerEnquiry } from 'src/app/Models/CustomerEnquiry';
import { EnquiryDAO } from 'src/app/dao/enquiryDAO';

export class EnquiryController {

   private customerEnquiry: CustomerEnquiry;

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
