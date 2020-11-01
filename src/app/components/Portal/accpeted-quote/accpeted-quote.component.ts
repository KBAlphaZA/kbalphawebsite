import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quote } from 'src/app/Server/Models/Quote';

@Component({
  selector: 'app-accpeted-quote',
  templateUrl: './accpeted-quote.component.html',
  styleUrls: ['./accpeted-quote.component.css']
})
export class AccpetedQuoteComponent implements OnInit {

  @Input() pvtQuoteId: any;

  pvtQuote: Quote;

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  acceptQuote(){

    // check if the quote exists first
    try {

      if (this.pvtQuoteId !== null){

        // 1. Search the quote in MongoDb using the id

        // 2. Set the found quote from backend to pvtQuote
        this.pvtQuote = new Quote();

        if (this.pvtQuote.acceptedQuote === false){

          // 3. Set the acceptedQuote property to true

          // 4. Put the result on the backend and use the business api to start the client flow

          // 5. close the tab on the browser
        }
        else{

          this.snackbar.open('You have already accepted the quote' + this.pvtQuote.clientDetails.company, 'Cancel', {duration: 6000});

        }

      }
    }
    catch (error) {

    }

  }

}
