import {ObjectId} from 'bson';
import { CustomerEnquiry } from '../Models/CustomerEnquiry';

let enquiry: CustomerEnquiry;

export class EnquiryDAO{

  public static async postEnquiry(localEnquiryVar: CustomerEnquiry){
    enquiry = localEnquiryVar;
    if (enquiry == null){
      // It's empty so do nothing
      return;
    }
    try{
        // return await post to the mongodatabase
    }
    catch (e){
      // log the error
      console.error('Unabale to post a comment');

    }
  }



  // static async addEnquiryToDb(CustomerEnquiry){
  //   try{

  //       // Construct the document that is to be inserted into MongoDB
  //       const enquiry= {someField: CustomerEnquiry};

  //       return await enquiry;
  //   }
  //   catch (e){
  //       console.error('There was a technical problem: ' + e);
  //   }
  // }
}
