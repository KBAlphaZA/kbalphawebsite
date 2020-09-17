import { Project } from 'src/app/Server/Models/Project';
import { ClientDetails } from './ClientDetails';
import { Quote } from '@angular/compiler';
import { ProjectFinance } from './Finance';

export class CurrentProjectInfo{
    projectId: any;
    developmentStage: string;
    projectDetails: Project;
    clientInformation: ClientDetails;
    projectFinances: ProjectFinance;
    developmentCycle: string;
    projectTask: TaskList;
    quoteAgreedOn: Quote;
}

export interface TaskList{
  taskName: string;
  completed: boolean;
  taskDetails: string;
}
