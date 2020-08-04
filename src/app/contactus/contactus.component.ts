import { Component, OnInit } from '@angular/core';

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

   /*This is the array of all the products offered rather than hard code them serviceOfferings: Array<string> = ['Software development', 'Serapis Medical', 'Pescado farms'];*/


   serviceOfferings: Service[] = [
     {serviceName: 'softwaredevelopment-0', viewValue : 'Software development'}
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
  }

}
