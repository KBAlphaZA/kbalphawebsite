import { Project } from 'src/app/Server/Models/Project';
import { ClientDetails } from './ClientDetails';

export class CurrentProjectInfo{
    projectId: any;
    developmentStage: string;
    projectDetails: Project;
    clientInformation: ClientDetails;
    totalAmountDue: number;
    totalPaid: number;
    developmentCycle: string;
    projectTask: TaskList;
}

export interface TaskList{
  taskName: string;
  completed: boolean;
  taskDetails: string;
}
