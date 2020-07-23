import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  potentialClientName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSendRequest(clientName: HTMLInputElement) {
       this.potentialClientName = clientName.value;
       console.log(clientName);
  }

}
