// This the model for a quote that is made

import { Project } from './Project';
import { ClientDetails } from './ClientDetails';
import { QuoteFinance } from './Finance';

export class Quote{
  public quoteId: string;
  public clientDetails: ClientDetails;
  public projectReq: Project;
  public validityDateOfQuote: Date;
  public dateTimeOfQuote: Date;
  public acceptedQuote: boolean;
  public quoteAmount: QuoteFinance;
}

