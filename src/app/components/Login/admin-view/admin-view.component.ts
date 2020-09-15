import { Component, OnInit } from '@angular/core';
import { QuoteGen } from 'src/app/Server/Utils/QuoteGenerator';
import { CustomerEnquiry } from 'src/app/Server/Models/CustomerEnquiry';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Quote } from 'src/app/Server/Models/Quote';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})

// const ELEMENT_DATA: Quote[] = [] ;

export class AdminViewComponent implements OnInit {


  constructor() { }

  dateValidity: string;

  nowSDate = new Date();

  // Development Stage
  stages: string[] = ['Design and development', 'Maintaince'];

  // project completion from backend
  completionPercentage = 40;

  // Get and initalize from backend
  localStageLabel: string;

  ngOnInit(): void {

    // Quote valid days
    const daysToExpiry = 5;

    this.dateValidity = this.generateExpiryDateLabel(this.nowSDate.getDate()).toString();

  }

  // Quote validity date generator
  private generateExpiryDateLabel(dateQuoteRequested: any): Date {

    dateQuoteRequested = this.nowSDate.getDate();

    dateQuoteRequested = dateQuoteRequested + 12;

    return dateQuoteRequested;
  }

  // Calculator
  private calculaateQuotePrice(numberOfFeatures: number, hourlyRate: number){

  }

  // Project Progress Bar
  private calculteProjectCompletion(totalFeatureNumber: number, featuresCompleted: number): number {

    const completionPercentage = (featuresCompleted / totalFeatureNumber) * 100;

    return completionPercentage;
  }

}




