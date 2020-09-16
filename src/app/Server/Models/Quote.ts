// This the model for a quote that is made

import { Project } from './Project';

export class Quote{
  public quoteId: string;
  public projectReq: Project;
  public validityDateOfQuote: Date;
  public dateTimeOfQuote: Date;
  public acceptedQuote: boolean;
  public total: number;
  public subTotal: number;
  public hourlyRate: number;
  public adjustmentAmount: number;
}
