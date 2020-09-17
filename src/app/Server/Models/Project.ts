export class Project{
  projectName: string;
  featuresRequested: IFeatureListing[];
  platformsToBeDevelopedOn: string[];
  industry: string;
  designSpecificationDocument: string;
}


export interface IFeatureListing{
  feature: string;
  hoursRequired: number;
}


