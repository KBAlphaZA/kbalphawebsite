import { Project } from 'src/app/Server/Models/Project';
import { ClientDetails } from './ClientDetails';
import { Quote } from '@angular/compiler';
import { ProjectFinance } from './Finance';
import { Cycle } from './DevelopmentCycle';

export class CurrentProjectInfo{
    projectId: any;
    projectDetails: Project;
    clientInformation: ClientDetails;
    projectFinances: ProjectFinance;
    developmentCycle: Cycle;
    projectTask: TaskList;
    quoteAgreedOn: Quote;
}

export interface TaskList{
  taskName: string;
  completed: boolean;
  taskDetails: string;
}
