import { Component, OnInit, Input } from '@angular/core';
import { CustomerEnquiry } from '../Models/CustomerEnquiry';
import { Customer } from '../Models/Customer';
import {EnquiryMetaData} from '../Models/EnquiryMetaData';
import { Location, PlatformLocation } from '@angular/common';


interface Service{
  serviceName: string;
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
  subjectChoosen = '';
  customerMessage = '';

  /*This enable two way binding between the text field and updated values*/
  clientCellphone = '';
  clientMessage = '';
  clientEmail = '';
  clientName = '';
  clientsubjectChoosen = '';

   serviceOfferings: Service[] = [
     {serviceName: 'General-00', viewValue: 'General enquiry'},
     {serviceName: 'softwaredevelopment-0', viewValue : 'Software development'},
     {serviceName: 'SerapisMedical-1', viewValue: 'Serapis Medical'},
     {serviceName: 'PescadoFarms-2', viewValue: 'Pescado Farms'},
     {serviceName: 'Gamedevelopment-3', viewValue: 'KB Alpha Interactive'},
     {serviceName: 'Career-4', viewValue: 'Careers'}
   ];

  constructor() { this.ngOnInit();}

  ngOnInit(): void {
  }

  GenerateMetaData(date, time, location){

  }

  onSendRequest() {

      /*take all the user data and send it to database.*/

      this.customerCellphone = this.clientCellphone;
      this.customerName = this.clientName;
      this.customerMessage = this.clientMessage;
      this.customerEmail = this.customerEmail;

      // The actual details of the customer
      const customerDets: Customer = {
         CustomerFullName: this.clientName,
         CustomerEmail: this.clientEmail,
         CustomerPhoneNumber: this.clientCellphone
        };

        // The data about the enquiry itself
      const localDate: Date = new Date();
      const meta: EnquiryMetaData = {
         date: localDate.toDateString(),
         time: localDate.toTimeString(),
         location: ''
        };

        // the data to be sent to the database
      const potentialClient: CustomerEnquiry = { CustomerDetails: customerDets, CustomerMessage: this.clientMessage };


  }

}
