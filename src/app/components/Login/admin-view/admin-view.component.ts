import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { CurrentProjectInfo } from 'src/app/Server/Models/CurrentProjectInformation';
import { QuoteFinance } from 'src/app/Server/Models/Finance';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})

// const ELEMENT_DATA: Quote[] = [] ;

export class AdminViewComponent implements OnInit {


  constructor() { }
  // Object with the quote infomation
  quoteObj: Quote;

  // object with all the project details
  currentProjectObj: CurrentProjectInfo;

  // pull list of project from backend
  ListOfprojects: CurrentProjectInfo[];

  // Name of Comapny Get data from quoteObj Object
  companyName = 'Altron Technologies';

  // CompanyEmail -Get data from quoteObj Object
  companyEmail = 'info@ALtronTech.co.za';

  // Get data from the quoteObj object
  quoteSubmissionDate = new Date().toDateString();

  dateValidity: string;

  nowSDate = new Date();

  // Quote valid days
  daysToExpiry = 7;

  // Number of features ordered from the Quote object retrieve the length if the array
  numberOfFeaturesOrdered: number;

  // Get from currentProjectObj object
  stages: string[] = ['Design and development', 'Maintaince'];

  // Get the list of feature requirements from the quoteObj object
  pvtFeatures: any[];

  // Get values from Quote object which gets it from backend
  pvtQuoteFigures: QuoteFinance = {total: 200000, subTotal: 2000, tax: 706, hourlyRate: 156.45, deposit: 20000, adjustments: 5000};

  // project completion from currentProject object
  completionPercentage = 40;

  // Get and initalize from backend
  localStageLabel: string;


  ngOnInit(): void {

    // Pass the date from the backend object
    this.dateValidity = this.generateExpiryDateLabel(this.nowSDate).toString();

  }

  // Quote validity date generator
  private generateExpiryDateLabel(dateQuoteRequested: Date): Date {

    // Add the 7 days and return a date after 7 days
    // dateQuoteRequested = dateQuoteRequested + constant value;

    return dateQuoteRequested;
  }

   createQuote(){
    // take an arguemnt with the quote id
    const pvtId = '';

    // try running the command
    try {

      if (pvtId != null){

        // 1. create and format invoice

        // 2. send email to email address with link for accpeting the quote

        // 3. update the data on backend

      }

    }
    catch (error) {
      console.log(error);
    }

  }

  // button to delete the project becuase the client wants to leave and we no longer run the project
  deleteProject(){
    // pass the projectId
    const pvtId = null;

    // 1. check if the passed id is not empty
    // 2. api qury to delete the project in the database

  }

  // Open PDF
  openPDFFile(){

  }

}




