
export class QuoteFinance{
  total: number;
  tax: number;
  adjustments: number;
  hourlyRate: number;
  subTotal: number;
  deposit: number;
}

export class ProjectFinance{
  projectId: any;
  totalPaid: number;
  agreedAmountQuote: QuoteFinance;
  percentagePaid: number;
}

export class CompanyFinance{
  revenue: number;
  costs: number;
  pNL: number;
}
