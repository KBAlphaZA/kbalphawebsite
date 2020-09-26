export class Project{
  projectName: string;
  featuresRequested: IFeatureListing[];
  platformsToBeDevelopedOn: PlatformsToDevelopOn[];
  industry: string;
  designSpecificationDocument: File;
}


export interface IFeatureListing{
  feature: string;
  hoursRequired: number;
}

export interface PlatformsToDevelopOn{
  platformName: string;
  checked: boolean;
}
