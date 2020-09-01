import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Server/Models/Employees';


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  // 1. Get the employees from the database and add them to the array

  // Create a local objects for now
  bongasInfo: Employee = {
    employeeName: 'Bonga Ngcobo',
     employeeLinkdInLink: 'https://www.linkedin.com/in/bonga-ngcobo-87582814a',
     employeeProfilePicture : '/assets/bonga.jpg',
     employeeTitle: 'Co-founder and tech lead'
    };


    khanyisanisInfo: Employee = {
      employeeName: 'Khanyisani Buthelezi',
      employeeProfilePicture: '/assets/khanyisani.jpg',
      employeeTitle: 'Co-founder and project lead',
      employeeLinkdInLink: 'https://www.linkedin.com/in/khanyisani-buthelezi-060602146'
    };

    // 2. Initalize the values from the database to the local array
    ListOfTeamMemebers: Employee[] = [this.bongasInfo, this.khanyisanisInfo];

  constructor() { }

  ngOnInit(): void {
  }


}
