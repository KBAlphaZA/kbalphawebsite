import { Component, OnInit, Input } from '@angular/core';
import { CustomerEnquiry } from '../Models/CustomerEnquiry';
import { Customer } from '../Models/Customer';
import {EnquiryMetaData} from '../Models/EnquiryMetaData';
import { Location, PlatformLocation } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {Subjects} from '../Models/SubjectEnum';

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

  constructor() { this.ngOnInit(); }

  ngOnInit(): void {

  }

  onSendRequest() {

      /*take all the user data and send it to database.*/

      this.customerCellphone = this.clientCellphone;
      this.customerName = this.clientName;
      this.customerMessage = this.clientMessage;
      this.customerEmail = this.customerEmail;
      this.customerCompany = this.clientCompanyName;
      // set the subject selectd here from the front end
      this.subjectSelected = Subjects.GeneralEnquiry;

      // The actual details of the customer
      const customerDets: Customer = {
         CustomerFullName: this.clientName,
         CustomerEmail: this.clientEmail,
         CustomerPhoneNumber: this.clientCellphone,
         CustomerCompanyName: this.clientCompanyName
        };

        // The data about the enquiry itself
      const localDate: Date = new Date();
      const meta: EnquiryMetaData = {
         date: localDate.toDateString(),
         time: localDate.toTimeString(),
         location: ''
        };

      // the data to be sent to the database, commented out for now
      const potentialClient: CustomerEnquiry = {
        CustomerDetails: customerDets,
        CustomerMessage: this.clientMessage,
        MetaData: meta,
        CustomerEnquiry: this.subjectSelected
      };

      // finally send to the data private theSnackBar: MatSnackBar

      // Notify the user the message went through
      // let bar: MatSnackBar;
      // bar.open('hi', 'cancel', {duration: 2000});

  }

}
