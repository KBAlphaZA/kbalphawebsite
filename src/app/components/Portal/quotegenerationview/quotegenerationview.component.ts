import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { Equations } from 'src/app/Server/Utils/Equations';
import { QuoteFinance } from 'src/app/Server/Models/Finance';
import { IFeatureListing, Project } from 'src/app/Server/Models/Project';
import { ClientDetails } from 'src/app/Server/Models/ClientDetails';

@Component({
  selector: 'app-quotegenerationview',
  templateUrl: './quotegenerationview.component.html',
  styleUrls: ['./quotegenerationview.component.css']
})
export class QuotegenerationviewComponent implements OnInit {

  constructor() { this.ngOnInit(); }

  // Object with the quote infomation
  quoteObj: Quote = new Quote();

  // Calculator
  calculator: Equations = new Equations();

  // Subtotal local variable
  subTotal = 0;


  // Features requested by the client
  tempFeatureList: IFeatureListing[] = [
                                          { position: 1, feature: 'The Applciation must have GPS location	',
                                            importance: 'High', hoursRequired: 0, featureCost: 0},
                                          { position: 2, feature: 'It must be on Android and IOS',
                                            importance: 'High', hoursRequired: 0, featureCost: 0},
                                          { position: 3, feature: 'It must sign in with Google, facebook and linkdin',
                                            importance: 'High', hoursRequired: 0, featureCost: 0}
                                       ];

  // Get data from the quoteObj object
  quoteSubmissionDate = new Date().toDateString();

  // Get values from Quote object which gets it from backend
  pvtQuoteFigures: QuoteFinance = {total: 200000, subTotal: 2000, tax: 706, hourlyRate: 156.45, deposit: 20000, adjustments: 5000};


  // hours required
  hoursReq: number;

  // The local container for the list of quotes
  pvtlistOfAllQuotes: Quote[];

  clientDetails: ClientDetails = {fullName: 'Khanyisani Buthelezi', company: 'KB Alpha', cellphone: '0787224416', email: 'khanyisani03.buthelezi@gmail.com'};

  fin: QuoteFinance = new QuoteFinance();

  tempProject: Project = {projectName: ' ',  featuresRequested: this.getListOfFeatureRequired(), platformsToBeDevelopedOn: [], industry: 'Engineering', designSpecificationDocument: null};

  // Dummy service DOA
  listOfAllQuotes: Quote[] = [
                                {
                                  quoteId: 50000,
                                  validityDateOfQuote: new Date(),
                                  acceptedQuote: false,
                                  dateTimeOfQuote: new Date(),
                                  projectReq: this.tempProject,
                                  clientDetails: this.clientDetails,
                                  quoteAmount: this.pvtQuoteFigures
                                },
                                {
                                  quoteId: 10001,
                                  validityDateOfQuote: new Date(),
                                  acceptedQuote: false,
                                  dateTimeOfQuote: new Date(),
                                  projectReq: new Project(),
                                  clientDetails: new ClientDetails(),
                                  quoteAmount: this.fin
                                }
                            ];

  ngOnInit(): void {
    // 1. Get list of submitted quotes from the backend
    this.getQuotes();

    // temporary button
    this.getListOfFeatureRequired();

  }

  getQuotes(): Quote[]{

    this.pvtlistOfAllQuotes = this.listOfAllQuotes;

    return this.pvtlistOfAllQuotes;
  }

  getListOfFeatureRequired(): IFeatureListing[]{
    const features = this.tempFeatureList;

    return features;
  }


  getSubTotal(costs: IFeatureListing[]): number{
    // iterate through the list
    console.log('in the method, the subtotal is: ', this.subTotal);

    console.log(costs);

    this.subTotal = 0;

    for (const costValue of costs){
      this.subTotal = this.subTotal + costValue.featureCost;
    }

    return this.subTotal;
  }

  createQuote(quoteID){
      // set a local quote id
      const pvtId = quoteID;

      // try running the command
      try {

        if (pvtId != null){

          // 1. update the quote values format invoice

          // 2. send email to email address with link for accpeting the quote to set the quote accpted property to true if accepted

          // 3. remove from the current working list.
        }

      }
      catch (error) {
        console.log(error);
      }
  }
}
