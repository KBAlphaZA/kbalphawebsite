import { Component, OnInit } from '@angular/core';
import { CurrentProjectInfo } from 'src/app/Server/Models/CurrentProjectInformation';
import { IFeatureListing, Project } from 'src/app/Server/Models/Project';
import { LocalDatabase } from 'src/app/Services/TempDataStore';
import {Equations} from 'src/app/Server/Utils/Equations';


@Component({
  selector: 'app-currentprojectsview',
  templateUrl: './currentprojectsview.component.html',
  styleUrls: ['./currentprojectsview.component.css']
})
export class CurrentprojectsviewComponent implements OnInit {

  constructor() { }

  eq: Equations;

  // Get data from temp data store class
  dummyData = new LocalDatabase();

  projectDetailObj = this.dummyData.dummyCurrentProject;

  // 1. The list of all projects from back end
  currentProjects: CurrentProjectInfo[] = [
    this.projectDetailObj
  ];

  // Get from currentProjectObj object
  stages: string[] = ['Design and development', 'Maintaince'];

  // Stage of developemnt, get from backend
  localStageLabel: string;

  ngOnInit(): void {

  }


   // button to delete the project becuase the client wants to leave and we no longer run the project
   deleteProject(){
    // pass the projectId
    const pvtId = null;

    // 1. check if the passed id is not empty
    // 2. api qury to delete the project in the database

  }

  // Open a drawer to view client spec document
  openPDFFile(){
     // Note: Pass the id for google drive
      // 1. Open a new tab on chrome with the pdf reader.
      window.open( 'pdf', '_blank');
  }

  getProjectCompletionPercentage() : number{
    this.eq=new Equations();
    let doneItems = 0;

    let totalDevFeatures = this.projectDetailObj.projectDetails.featuresRequested.length;

    let checkedItems = this.projectDetailObj.projectDetails.featuresRequested.forEach(y=>{
      if(y.checked === true){
        doneItems++;
      }
    });

    return this.eq.percentageCalculator(doneItems, totalDevFeatures);
  }

  //set the value of the checked item
  setValue(value: IFeatureListing){

    //1. update local object
    value.checked =! value.checked;

    //2. update backed end with put

    //3. Redraw the progression bar
    this.getProjectCompletionPercentage();
  }

}
