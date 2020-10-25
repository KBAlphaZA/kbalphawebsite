import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
import { Quote } from 'src/app/Server/Models/Quote';
import { QuoteService } from '../Services/QuoteService';
import {MatTable} from '@angular/material/table';
import { MatButton } from '@angular/material/button';


export interface FeatureObject {
  Feature: string;
  position: number;
  symbol: string;
}

@Component({
  selector: 'app-dialog-quote-form',
  templateUrl: './dialog-quote-form.component.html',
  styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {
  form: FormGroup;
  quoteForm: Quote;
  featureData: FeatureObject[] = [];
  firstGroup: FormGroup;
  secondGroup: FormGroup;
  numberOfFeatureInputs: string[];

  disabled = false;
  numbers: number[];
   value: string;
  private maxFileSize = 4000000;

  fileToUpload: File;

  fileName = '';

  displayedColumns: string[] = ['position', 'Feature', 'symbol'];
  dataSource = this.featureData;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private formBuilder: FormBuilder, private quoteservice: QuoteService, private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.firstGroup = this.formBuilder.group({fullName: [' ']});
      this.secondGroup = this.formBuilder.group({someValue: [' ']});
  }
  getAllFeatures() {
    this.quoteservice.getFeatures()
        .subscribe(
          (data: any) => {
            this.dataSource = data;
          }
        );
  }
  public addfeaturevalue(theval: string)
  {
    const newobj: FeatureObject = {
      position: this.dataSource.length + 1,
      Feature: theval,
      symbol: 'H'
    };
    this.quoteservice.addFeature(newobj);
    this.getAllFeatures();
    this.table.renderRows();
  }

  public deleteFeature(button: FeatureObject)
  {
    const index = this.dataSource.indexOf(button, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();
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
