import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Quote } from 'src/app/Server/Models/Quote';

@Component({
  selector: 'app-dialog-quote-form',
  templateUrl: './dialog-quote-form.component.html',
  styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {

  quoteForm: Quote;

  firstGroup: FormGroup;
  secondGroup: FormGroup;

  numberOfFeatureInputs: string[];

  disabled = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.firstGroup = this.formBuilder.group({fullName: ['']});
      this.secondGroup = this.formBuilder.group({someValue: ['']});
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
