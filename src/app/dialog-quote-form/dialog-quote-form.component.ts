import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quote } from 'src/app/Server/Models/Quote';
import { QuoteService } from '../Services/QuoteService';
import {MatTable} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { IFeatureListing, PlatformsToDevelopOn } from '../Server/Models/Project';
import { ClientDetails } from '../Server/Models/ClientDetails';
import { KBAlphaPaymentOptions, QuoteFinance } from '../Server/Models/Finance';
import { Project } from '../Server/Models/Project';

@Component({
selector: 'app-dialog-quote-form',
templateUrl: './dialog-quote-form.component.html',
styleUrls: ['./dialog-quote-form.component.css']
})

export class DialogQuoteFormComponent implements OnInit {

 // General quote information
quoteForm: Quote = new Quote();

 // Quote finaincing
pvtQuoteFinance: QuoteFinance = new QuoteFinance();

 form: FormGroup;
// quoteForm: Quote;
// featureData: FeatureObject[] = [];
featureData: IFeatureListing[] = [];

// Client details
firstGroup: FormGroup;

 // project details
secondGroup: FormGroup;

 // Payment options selcetions
thirdGroup: FormGroup;

 // Finlization of quote
fourthGroup: FormGroup;

 disabled: boolean;

 numberOfFeatureInputs: string[];


 defaultBorderColour = '#2C3E7B';
 selectedBorderColour = 'green';

 currentSelectedId: number;

 selectedPaymentCard: KBAlphaPaymentOptions;

 // local list
 pvtlocalPlatformsList: PlatformsToDevelopOn [] = [];

 // The options card data (should come from the backend in the future)
paymentOptionCards: PaymentOptionsCards[] = [
{
paymentOption: {
optionId: 1,
paymentOptionName: 'Full',
description: 'You pay the full amount up front',
term: '1',
deposit: 1,
onCompletion: 0,
maintaince: 0
},
backgroundPicture: '/assets/1.png',
borderColour: this.defaultBorderColour,
},
{
paymentOption: {
optionId: 2,
paymentOptionName: 'Halves',
description: 'You pay the half for the deposit and the other half on completion',
term: '2',
deposit: 0.50,
onCompletion: 0.50,
maintaince: 0
},
backgroundPicture: '/assets/2.png',
borderColour: this.defaultBorderColour
},
{
paymentOption: {
optionId: 3,
paymentOptionName: 'Thirds',
description: 'You pay the stipulated amount in 2 installements and a third being paid out monthly for maintiance',
term: '3',
deposit: 0.25,
onCompletion: 0.25,
maintaince: 0.50
},
backgroundPicture: '/assets/3.png',
borderColour: this.defaultBorderColour
},
{
paymentOption: {
optionId: 4,
paymentOptionName: 'Quarter',
description: 'You pay the amount up in 4 installments',
term: '4',
deposit: 0.334,
onCompletion: 0.334,
maintaince: 0.334
},
backgroundPicture: '/assets/4.png',
borderColour: this.defaultBorderColour
},

 ];

 platforms: PlatformsToDevelopOn[] = [
{platformName: 'Mobile Development', checked: false},
{platformName: 'Web Development', checked: false},
{platformName: 'IoT Developemnt', checked: false},
{platformName: 'AR/VR Development', checked: false}
];

 unchecked = false;

 numbers: number[];

 private readonly maxFileSize = 4000000;

 fileToUpload: File;

 fileName = '';

displayedColumns: string[] = ['position', 'Feature', 'symbol'];
dataSource = this.featureData;
@ViewChild(MatTable) table: MatTable<any>;
fileTypeIcon = '';
constructor(private formBuilder: FormBuilder, private dialogsnackbar: MatSnackBar, private quoteservice: QuoteService) {
this.ngOnInit();
this.numbers = Array(10).fill(1).map((x, i) => i);
}
ngOnInit(): void {

 this.firstGroup = this.formBuilder.group(
{
fullName: '',
cellphoneNumber: '',
email: '',
companyName: '',
vatNumber: ''
});

 this.secondGroup = this.formBuilder.group(
{
industry: '',
platforms: this.getCheckedItems(this.platforms)
});
}

 public deleteFeature(button: IFeatureListing)
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

 console.log(fileType);

 // 1. Check if the size is 4mb or less
 if (this.checkFileSize(fileSize, fileType)){
// Add data and file data to the document
}
else{
// Open snack-bar with red background to alert the user that an error occured
if (fileSize > this.maxFileSize){
this.dialogsnackbar.open('This file is too big, try compressing it or using another file', '',
{duration: 7000}
);
}
// Error messages
else{
if ( fileType.substring(12) !== '/pdf' ||
fileType.substring(12) !== '/docx' ||
fileType.substring(12) !== '/x-zip-compressed'){

 // display a file type error
this.dialogsnackbar.open('Error due to wrong file format', ' ',
{duration: 6000}
);
this.fileName = ' ';
}
}
}

 // 2. See what icon to display for that file type
// Use a switch statement
}

 pitch(event: any) {
console.log('pitch=> ', event.value);
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
// We need to fix this, Types need to change
 const pvtProjectDetails: Project = {
featuresRequested: this.dataSource,

projectName: ' ',
platformsToBeDevelopedOn: this.getCheckedItems(this.platforms),
industry: pvtSecondGroup.get('industry').value,
designSpecificationDocument: this.fileToUpload,
developmentCycle: null
};

 this.quoteForm = {
clientDetails: pvtclientDetails,
dateTimeOfQuote: new Date(),
acceptedQuote: false,
quoteId: 325345345,

 validityDateOfQuote: new Date(),
quoteAmount: new QuoteFinance(),
projectReq: pvtProjectDetails
};

 return this.quoteForm;
}

submitQuote(quoteForm){
// 1. compile into a single form using the method defined locally
const completeForm = this.compileToCompletQuote(this.firstGroup, this.secondGroup, this.thirdGroup);

 // Testing purposes

console.log(completeForm);

 // 2. send this information to the backend
// http.post(completeForm);
// this.quoteservice.postCompletedForm(completeForm);

 // 3. reset the form and close the dialog
this.firstGroup.reset();
this.secondGroup.reset();
this.thirdGroup.reset();
this.fourthGroup.reset();

 // 4. Show the user that it went through with a snack-bar
this.openSnackBar();
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
const newobj: IFeatureListing = {
position: this.dataSource.length + 1,
feature: theval,
importance: 'High',
hoursRequired: 0,
featureCost: 0
};
this.quoteservice.addFeature(newobj);
this.getAllFeatures();
this.table.renderRows();
}

// gets the payment option
optionPicked(localVar: HTMLElement){

    this.paymentOptionCards.forEach(element => {

      if (this.currentSelectedId === element.paymentOption.optionId || this.currentSelectedId != null){
        element.borderColour = this.defaultBorderColour;
      }

      if (localVar.innerText.includes(element.paymentOption.paymentOptionName)){
        // change the colour
        element.borderColour = this.selectedBorderColour;

        // update local id variable
        this.currentSelectedId = element.paymentOption.optionId;

        // set the variable to the selected object
        this.selectedPaymentCard = element.paymentOption;

        console.log(this.selectedPaymentCard);

        }
    });
}

// gets checked items
setValue(checkValue: any, plat: PlatformsToDevelopOn){
  if (this.platforms === null){
    return false;
  }
  else{
    this.platforms.forEach(checkedItems => {
    plat.checked = checkValue;
    });
  }
}

// Get the platforms selected by the user
private getCheckedItems(pvtPlatformsChecked: PlatformsToDevelopOn[]): PlatformsToDevelopOn[]{

  const userSelectedPlatforms: PlatformsToDevelopOn[] = pvtPlatformsChecked.filter(y => y.checked === true);

  console.log(userSelectedPlatforms);

  return userSelectedPlatforms;
}

// This method is used to check the file size and type due to the fact that
private checkFileSize(pvtFileSize: number, pvtFileType: string): boolean{
if ((pvtFileSize <= this.maxFileSize) &&
(pvtFileType === 'application/pdf' ||
pvtFileType === 'application/docx' ||
pvtFileType === 'application/x-zip-compressed'
)
)
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

interface PaymentOptionsCards{
paymentOption: KBAlphaPaymentOptions;
backgroundPicture: string;
borderColour: string;
}
