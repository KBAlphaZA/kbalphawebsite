// import * as express from 'express';
import { CustomerEnquiry } from 'src/app/Models/CustomerEnquiry';


// class EnquiryController {
//   public path = '/enquiries';
//   public router = express.Router();

//   private customerEnquiry: CustomerEnquiry;

//   constructor() {
//     this.intializeRoutes();
//   }

//   public intializeRoutes() {
//     this.router.post(this.path, this.createEnquiry);
//   }

//   createEnquiry = (request: express.Request, response: express.Reponse) => {
//     const clientenquiry: CustomerEnquiry = request.body;
//     response.send(clientenquiry);
//   }

// }

export class TestEnquiryController {

  private customerEnquiry: CustomerEnquiry;

  constructor(){}

   public sendPostToBackend(enq: any): void {
    console.log(enq);
  }
}

// export default EnquiryController;
