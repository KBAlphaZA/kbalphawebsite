import { Component, OnInit } from '@angular/core';
import { QuoteGen } from 'src/app/Server/Utils/QuoteGenerator';
import { CustomerEnquiry } from 'src/app/Server/Models/CustomerEnquiry';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})

export class AdminViewComponent implements OnInit {

  constructor() { }

  customerLeads = new MatTableDataSource<string>(DummyCustomerLeadList);

  ngOnInit(): void {
  }

}

const DummyCustomerLeadList: string[] = ['lead one', 'lead two', 'lead three', 'lead four'];
