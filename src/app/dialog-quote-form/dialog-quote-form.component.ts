import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quote } from 'src/app/Server/Models/Quote';
import { ClientDetails } from '../Server/Models/ClientDetails';
import { QuoteFinance } from '../Server/Models/Finance';
import { Project } from '../Server/Models/Project';

@Component({
  selector: 'app-dialog-quote-form',
  templateUrl: './dialog-quote-form.component.html',
  styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {

  quoteForm: Quote;

  form: FormGroup;

  firstGroup: FormGroup;

  secondGroup: FormGroup;

  thirdGroup: FormGroup;

  disabled: boolean;

  numberOfFeatureInputs: string[];

  platforms: PlatformsToDevelopOn[] = [
    {platformName: 'Mobile Development', checked: false},
    {platformName: 'Web Development', checked: false},
    {platformName: 'IoT Developemnt', checked: false},
    {platformName: 'AR/VR Development', checked: false}
  ];

  private userSelectedPlatforms: PlatformsToDevelopOn[];

  unchecked = false;

  numbers: number[];

  private maxFileSize = 4000000;

  fileToUpload: File;

  fileName = '';

  constructor(private formBuilder: FormBuilder, private dialogsnackbar: MatSnackBar) {
      this.ngOnInit();
      this.numbers = Array(10).fill(1).map((x, i) => i);
   }


  ngOnInit(): void {

      this.firstGroup = this.formBuilder.group(
        {fullName: [''],
         cellphoneNumber: [''],
         email: [''],
         companyName: [''],
         vatNumber: ['']
      });

      this.secondGroup = this.formBuilder.group(
        {industry: [''],
         platforms: [this.getCheckedItems(this.platforms)]
      });
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
        this.dialogsnackbar.open('This file is too big, try compressing it or using another file', '', {duration: 7000});
      }
      // Error messages
      else{
      if ( fileType.substring(12) !== '/pdf' ||
             fileType.substring(12) !== '/docx' ||
             fileType.substring(12) !== '/zip'){
          // display a file type error
        }
      }
    }
  }

  pitch(event: any) {
    console.log('pitch=>  ', event.value);
    this.numbers = Array(event.value).fill(0).map((x, i) => i);

  }

  private compileToCompletQuote(pvtFirstGroup: FormGroup, pvtSecondGroup: FormGroup, pvtThirdGroup: FormGroup): Quote {

      // Organize the forms to make a single form
      // initalize all fields.

      const pvtclientDetails: ClientDetails = {
                                               fullName: pvtFirstGroup.get('fullName').value,
                                               cellphone: pvtFirstGroup.get('cellphoneNumber').value,
                                               vatNumber: pvtFirstGroup.get('vatNumber').value,
                                               email: pvtFirstGroup.get('email').value,
                                               company: pvtFirstGroup.get('companyName').value
                                              };

      const pvtProjectDetails: Project = {featuresRequested: [],
                                          projectName: ' ',
                                          platformsToBeDevelopedOn: [],
                                          industry: pvtSecondGroup.get('industry').value,
                                          designSpecificationDocument: this.fileToUpload
                                        };

      this.quoteForm = {
         clientDetails: pvtclientDetails,
         dateTimeOfQuote: new Date(),
         acceptedQuote: false,
         quoteId: '325345345',
         validityDateOfQuote: new Date(),
         quoteAmount: new QuoteFinance(),
         projectReq: pvtProjectDetails
      };

      return this.quoteForm;
  }


  submitQuote(quoteForm){
    // 1. compile into a single form using the method defined locally
    const completeForm = this.compileToCompletQuote(this.firstGroup, this.secondGroup, this.thirdGroup);

    // TEsting purposes
    console.log(completeForm);

    // 2. send this information to the backend
    // http.post(completeForm);

    // 3. reset the form and close the dialog

    // 4. Show the user that it went through with a snack-bar
    this.openSnackBar();
  }


    // Get the platforms selectewd by the user
    private getCheckedItems(pvtPlatformsChecked: PlatformsToDevelopOn[]): PlatformsToDevelopOn[]{


      console.log('In the get checked Items method');

      // for (const checked of pvtPlatformsChecked){
      //   // loop through to look for the checked boxes

      //   if (checked.checked === true){
      //     console.log('checked');
      //     this.userSelectedPlatforms.push(checked);
      //   }
      // }

      this.userSelectedPlatforms = pvtPlatformsChecked;

      return this.userSelectedPlatforms;
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

  private openSnackBar(){
    this.dialogsnackbar.open('Thank you, we will stay in touch', 'close', {duration: 7000});
  }
}

export interface PlatformsToDevelopOn{
  platformName: string;
  checked: boolean;
}
