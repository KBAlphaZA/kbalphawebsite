import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
import { Quote } from 'src/app/Server/Models/Quote';

@Component({
  selector: 'app-dialog-quote-form',
  templateUrl: './dialog-quote-form.component.html',
  styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {
  form: FormGroup;
  quoteForm: Quote;
  
  firstGroup: FormGroup;
  secondGroup: FormGroup;

  numberOfFeatureInputs: string[];

  disabled = false;
  numbers: number[];

  constructor(private formBuilder: FormBuilder) {
      this.numbers = Array(1).fill(1).map((x, i) => i);
   }

  ngOnInit(): void {
      
      this.firstGroup = this.formBuilder.group({fullName: ['']});
      this.secondGroup = this.formBuilder.group({someValue: ['']});
  }
  pitch(event: any) {
    console.log('pitch=>  ', event.value);
    this.numbers = Array(event.value).fill(0).map((x, i) => i);
  }

  private compileToCompletQuote(pvtFirstGroup: FormGroup, pvtSecondGroup: FormGroup): Quote {

      // Organize the forms to make a single form

      return this.quoteForm;
  }

  submitQuote(quoteForm){
    // 1. compile into a single form using the method defined locally
    const completeForm = this.compileToCompletQuote(this.firstGroup, this.secondGroup);

    // 2. send this information to the backend
    // http.post(completeForm);

    // 3. reset the form and close the dialog
  }
}
