import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { CustomerEnquiry } from '../Server/Models/CustomerEnquiry';
import {EnquiryMetaData} from '../Server/Models/EnquiryMetaData';
import { Location, PlatformLocation } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {Subjects} from '../Server/Models/SubjectEnum';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { isNull } from 'util';
import { NgForm } from '@angular/forms';
import { CustomerLeadService} from '../Services/CustomerLeadService';

interface Service{
  serviceName: Subjects;
  viewValue: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  @Output() postcontact: EventEmitter<any> = new EventEmitter();
  // http client protocols
  http: HttpClient;


  customerName = '';
  customerCellphone = '';
  customerEmail = '';
  customerMessage = '';
  customerCompany = '';
  subjectSelected = Subjects.GeneralEnquiry;

  /*This enable two way binding between the text field and updated values*/
  clientCellphone = '';
  clientMessage = '';
  clientEmail = '';
  clientName = '';
  clientCompanyName = '';

   serviceOfferings: Service[] = [
     {serviceName: Subjects.GeneralEnquiry, viewValue: 'General enquiry'},
     {serviceName: Subjects.SoftwareDevelopment, viewValue : 'Software development'},
     {serviceName: Subjects.SerapisMedical, viewValue: 'Serapis Medical'},
     {serviceName: Subjects.PescadoFarms, viewValue: 'Pescado Farms'},
     {serviceName: Subjects.KbAlphaInteractive, viewValue: 'KB Alpha Interactive'},
     {serviceName: Subjects.Careers, viewValue: 'Careers'}
   ];

  constructor(private customerLeadService:CustomerLeadService) { this.ngOnInit(); }

  ngOnInit(): void {

  }


  onSendRequest(f: NgForm) {
      /*take all the user data and send it to database.*/

      this.customerCellphone = this.clientCellphone;
      this.customerName = this.clientName;
      this.customerMessage = this.clientMessage;
      this.customerEmail = this.customerEmail;
      this.customerCompany = this.clientCompanyName;
      // set the subject selectd here from the front end
      this.subjectSelected = Subjects.GeneralEnquiry;

      // The actual details of the customer (KHanyisani's code)
      // const customerDets: Customer = {
      //    CustomerFullName: this.clientName,
      //    CustomerEmail: this.clientEmail,
      //    CustomerPhoneNumber: this.clientCellphone,
      //    CustomerCompanyName: this.clientCompanyName
      //   };

        // The data about the enquiry itself
      const localDate: Date = new Date();
      const meta: EnquiryMetaData = {
         date: localDate.toDateString(),
         time: localDate.toTimeString(),
         location: ''
        };

      // the data to be sent to the database, commented out for now
      const potentialClient: CustomerEnquiry = {
        CustomerMessage: this.clientMessage,
        MetaData: meta,
        CustomerEnquiry: this.subjectSelected
      };
      console.log('form results =>',potentialClient );
      this.customerLeadService.postcontact(potentialClient);
      
      // return this.http.post('http ://localhost:4200/Enquiry/post', f);
        
      // Finally reset the form
      f.resetForm();
  }


  // clear data method
  private clearForm(){
    this.clientCellphone = '';
    this.clientCompanyName = '';
    this.clientEmail = '';
    this.clientMessage = '';
    this.clientName = '';
    this.subjectSelected = Subjects.none;
  }

}
