import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { Equations } from 'src/app/Server/Utils/Equations';
import { ProjectFinance, QuoteFinance } from 'src/app/Server/Models/Finance';
import { IFeatureListing, Project } from 'src/app/Server/Models/Project';
import { ClientDetails } from 'src/app/Server/Models/ClientDetails';
import { Cycle } from '../Server/Models/DevelopmentCycle';
import { CurrentProjectInfo, TaskList } from '../Server/Models/CurrentProjectInformation';

// This is a local database to test and configure the web app
export class LocalDatabase{

  calculator: Equations = new Equations();

  private tempFeatureList: IFeatureListing[] = [
    {
      feature: 'The Applciation must have GPS location	',
      hoursRequired: 0,
      featureCost: 0,
      position: 1,
      importance: 'not so important'
    },
    {
      feature: 'It must be on Android and IOS',
      hoursRequired: 0,
      featureCost: 0,
      position: 2,
      importance: 'not so important'
    },
    {
      feature: 'It must sign in with Google, facebook and linkdin',
      hoursRequired: 0,
      featureCost: 0,
      position: 3,
      importance: 'not so important'
    }
 ];

 // Get values from Quote object which gets it from backend
 private pvtQuoteFigures: QuoteFinance = {
  total: 10000,
  subTotal: 0,
  tax: 0,
  hourlyRate: this.calculator.hourlyRate,
  depositAmount: 0,
  adjustments: 0,
  selectedPaymentOptions: null
};

 private clientDetails: ClientDetails = {
  fullName: 'Khanyisani Buthelezi',
  company: 'KB Alpha',
  cellphone: '0787224416',
   email: 'khanyisani03.buthelezi@gmail.com'
  };

  private tempProject: Project = {
    projectName: ' ',
    featuresRequested: this.tempFeatureList,
    platformsToBeDevelopedOn: [],
    industry: 'Engineering',
    designSpecificationDocument: null,
    developmentCycle: Cycle.design
  };

  dummyQuote: Quote =
  {
      projectReq: this.tempProject,
      quoteAmount: this.pvtQuoteFigures,
      quoteId: 1212321,
      clientDetails: this.clientDetails,
      acceptedQuote: false,
      validityDateOfQuote: new Date(),
      dateTimeOfQuote: new Date()
  };

  dummyCurrentProject: CurrentProjectInfo = {
    projectId: '123123412',
    developmentCycle: Cycle.design,
    clientInformation: this.clientDetails,
    projectFinances: new ProjectFinance(),
    projectDetails: this.tempProject,
    projectTask: null,
    quoteAgreedOn: null
  };

}
