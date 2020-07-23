import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  onSendRequest(clientName: HTMLInputElement) {
      //take all the user data and send it to database.
      this.customerName = clientName.value;
  }

}
