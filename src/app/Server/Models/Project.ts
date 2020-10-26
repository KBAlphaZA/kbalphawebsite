export class Project{
  projectName: string;
  featuresRequested: IFeatureListing[];
  platformsToBeDevelopedOn: PlatformsToDevelopOn[];
  industry: string;
  designSpecificationDocument: File;
  // featuresRequested2: FeatureObject[];
}


export interface IFeatureListing {
  position: number;
  feature: string;
  importance: string;
  hoursRequired: number;
  featureCost: number;
}

export interface FeatureObject {
  Feature: string;
  position: number;
  importance: string;
}

export interface PlatformsToDevelopOn {
  platformName: string;
  checked: boolean;
}
