import {ObjectId} from 'bson';
import { CustomerEnquiry } from '../Models/CustomerEnquiry';

let enquiry;

export default class EnquiryDAO{
  static async injectDB(conn){
    if (enquiry){
      return;
    }
    try{
      enquiry = await conn.db('PotentialCustomers').collection('customers');
    }
    catch (e){
      // log the error
    }
  }

  static async addEnquiryToDb(enquiryId, ){
    try{

    }
    catch (e){

    }
  }
}
