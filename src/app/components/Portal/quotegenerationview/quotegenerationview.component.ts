import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { Equations } from 'src/app/Server/Utils/Equations';
import { QuoteFinance } from 'src/app/Server/Models/Finance';

@Component({
  selector: 'app-quotegenerationview',
  templateUrl: './quotegenerationview.component.html',
  styleUrls: ['./quotegenerationview.component.css']
})
export class QuotegenerationviewComponent implements OnInit {

  constructor() { }

  // Object with the quote infomation
  quoteObj: Quote;

  // Calculator
  calculator: Equations = new Equations();

  // Name of Comapny Get data from quoteObj Object
  companyName = 'Altron Technologies';

  // CompanyEmail -Get data from quoteObj Object
  companyEmail = 'info@ALtronTech.co.za';

  // Get data from the quoteObj object
  quoteSubmissionDate = new Date().toDateString();

  // Get values from Quote object which gets it from backend
  pvtQuoteFigures: QuoteFinance = {total: 200000, subTotal: 2000, tax: 706, hourlyRate: 156.45, deposit: 20000, adjustments: 5000};

  // hourly rate
  pvtHourlyRate = this.calculator.hourlyRate;

  // Feature cost (Use the calculator defined in the class equation to calculate)
  featureCost: number;

  // hours required
  hoursReq: number;

  ngOnInit(): void {
  }


  createQuote(){
      // set a new quote id
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
}
