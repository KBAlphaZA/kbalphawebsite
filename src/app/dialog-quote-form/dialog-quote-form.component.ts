import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-dialog-quote-form',
  templateUrl: './dialog-quote-form.component.html',
  styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {

  firstGroup: FormGroup;
  secondGroup: FormGroup;

  sliderValue = 1;

  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }


  submitQuote(quoteForm){

  }
}
