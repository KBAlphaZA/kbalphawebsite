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

  private maxFileSize = 4000000;

  fileToUpload: File;

  fileName = '';

  constructor(private formBuilder: FormBuilder) {
      this.numbers = Array(10).fill(1).map((x, i) => i);
   }


  ngOnInit(): void {

      this.firstGroup = this.formBuilder.group({fullName: ['']});
      this.secondGroup = this.formBuilder.group({someValue: ['']});
  }

  handleFileInput(pvtFileToUpload: FileList){

    this.fileToUpload = pvtFileToUpload.item(0);
    const fileSize = this.fileToUpload.size;
    const fileType = this.fileToUpload.type;
    this.fileName = this.fileToUpload.name;

    // 1. Check if the size is 4mb or less
    if (this.checkFileSize(fileSize, fileType)){
        // Add data and file data to the document
    }
    else{
      // Open snack-bar with red background to alert the user that an error occured
      if (fileSize > this.maxFileSize){
        // use the pop up dialog to tell the user that the file is too big
      }
      // Error messages
      else{
      if ( fileType.substring(12) !== '/pdf' ||
             fileType.substring(12) !== '/docx'){
          // display a file type error
        }
      }
    }
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


    // This method is used to check the file size and type due to the fact that
    private checkFileSize(pvtFileSize: number, pvtFileType: string): boolean{
    if ((pvtFileSize <= this.maxFileSize) && (pvtFileType === 'application/pdf' || pvtFileType === 'application.docx'))
    {
       return true;
    }
    else{
      return false;
    }
  }
}
