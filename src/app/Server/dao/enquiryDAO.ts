import {ObjectId} from 'bson';
import { CustomerEnquiry } from '../Models/CustomerEnquiry';

let enquiry: CustomerEnquiry;

export default class EnquiryDAO{
  
  static async injectDB(conn) {
    if (enquiry) {
      return
    }
    try {
      var dburl = 'mongodb+srv://coFounderBonga:12345@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority';
      enquiry = await conn.db(dburl).collection("enquiry")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

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
