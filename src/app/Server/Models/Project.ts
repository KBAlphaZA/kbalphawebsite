import { Cycle } from './DevelopmentCycle';

export class Project{
  projectName: string;
  featuresRequested: IFeatureListing[];
  platformsToBeDevelopedOn: PlatformsToDevelopOn[];
  industry: string;
  designSpecificationDocument: File;
  developmentCycle: Cycle;
}


export interface IFeatureListing{
  feature: string;
  hoursRequired: number;
  featureCost: number;
}

export interface PlatformsToDevelopOn{
  platformName: string;
  checked: boolean;
}
